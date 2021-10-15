const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const generateWebPage = require('./src/generateWebPage');

let employeeInfo;

// Questions for Managers
const managerQuestions = () => {
    console.log(`
        ===============================
        Input Team Manager Information
        ===============================
    `)
    return inquirer.prompt([
    // Manager Office Number
        {
            type: 'input',
            name: 'officeNum',
            message: "What is their assigned office number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerData => {
        let { officeNum } = managerData;
        employeeQuestions();
        return officeNum;
    })
};

// Type of Employee you want to create
const employeeTypeQuestions = () => {
    return inquirer.prompt([
    // Employee type
        {
            type: 'list',
            name: 'role',
            message: "Please choose the type of employee you would like to add from the list below:",
            choices: ['Engineer', 'Intern']
        }
    ])
    .then(empTypeData => {
        let { role } = empTypeData;
        
        if (role === 'Engineer') {
            console.log('Engineer was selected! ', role)
            engineerQuestions();
        } else if (role === 'Intern') {
            console.log('Intern was selected! ', role)
            internQuestions();
        } else {
            console.log('How did you get here? (employeeTypeQuestions() Function)');
        }
    })
}

// Questions for Engineers
const engineerQuestions = () => {
    console.log(`
        ===========================
        Input Engineer Information
        ===========================
    `)
    return inquirer.prompt([
    // Engineer GitHub Username
        {
            type: 'input',
            name: 'githubUsername',
            message: "What is their GitHub username?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter this employees GitHub username!');
                }
            }
        }
    ])
    .then(engineerData => {
        let { githubUsername } = engineerData;
        employeeQuestions();
        return githubUsername;
    })
};

// Questions for Interns
const internQuestions = () => {
    console.log(`
        =========================
        Input Intern Information
        =========================
    `)
    return inquirer.prompt([
    // Intern School Name
        {
            type: 'input',
            name: 'schoolName',
            message: "What is the name of their school?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name of this Employees school!');
                }
            }
        }
    ])
    .then(internData => {
        let { schoolName } = internData;
        employeeQuestions();
        return schoolName;
    })
};

// Generic Questions for all types of employees
const employeeQuestions = (officeNumber) => {
    return inquirer.prompt([
    // Employee Name
        {
            type: 'input',
            name: 'employeeName',
            message: "What is the thier full name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter this employees full name!');
                }
            }
        },
        // Employee ID #
        {
            type: 'input',
            name: 'employeeIdNumber',
            message: "What is their unique ID number?",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter this employee ID number!');
                    return false;
                } else {
                    return true;
                }
            }
        }, 
        // Employee Email Address
        {
            type: 'input', 
            name: 'employeeEmail',
            message: "What is their email address?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter this employees email address!');
                }
            }
        }
    ])
    .then(employeeData => {
        let { employeeName, employeeIdNumber, employeeEmail } = employeeData;
        console.log('Employee Name: ' + employeeName,
                    '\n' + 'Employee ID Number: ' + employeeIdNumber,
                    '\n' + 'Employee Email Address: ' + employeeEmail);
        anotherEmployeeQuestions();
    })
};

// Check to see if user wants to creat another employee
const anotherEmployeeQuestions = () => {
    return inquirer.prompt([
    // Create another employee?
        {
            type: 'confirm',
            name: 'addEmployeeResponse',
            message: "Would you like to create another Team Member's profile?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            },
        }
    ])
    .then(employeeAddData => {
        let { addEmployeeResponse } = employeeAddData;
        if (addEmployeeResponse === true) {
            employeeTypeQuestions();
        } else {
            console.log(`
        ====================================
        You have completed making your team!
        ====================================
            `)
        }
    })
};

function init() {
    managerQuestions();
}

init();