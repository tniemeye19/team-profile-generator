const generateWebPage = require('./src/generateWebPage.js');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

let teamMembers = []

// Questions for Managers
const managerQuestions = () => {
    console.log(`
        ===============================
        Input Team Manager Information
        ===============================
    `);
    inquirer.prompt([
    // Manager Office Number
        {
            type: 'input',
            name: 'officeNumber',
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
        let { officeNumber } = managerData;
        let role = 'Manager';
        employeeQuestions(role, officeNumber);
    })
};

// Type of Employee you want to create
const employeeTypeQuestions = () => {
    inquirer.prompt([
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
    `);
    inquirer.prompt([
    // Engineer GitHub Username
        {
            type: 'input',
            name: 'ghUsername',
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
        let { ghUsername } = engineerData;
        let role = 'Engineer';
        employeeQuestions(role, ghUsername);
    })
};

// Questions for Interns
const internQuestions = () => {
    console.log(`
        =========================
        Input Intern Information
        =========================
    `);
    inquirer.prompt([
    // Intern School Name
        {
            type: 'input',
            name: 'school',
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
        let { school } = internData;
        let role = 'Intern';
        employeeQuestions(role, school);
    })
};

// Generic Questions for all types of employees
const employeeQuestions = (value1, value2) => {
    inquirer.prompt([
    // Employee Name
        {
            type: 'input',
            name: 'name',
            message: "What is the their full name?",
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
            name: 'id',
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
            name: 'email',
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
        if (value1 === 'Manager') {
            let officeNum = value2;
            let {name, id, email, role } = employeeData;
            const manager = new Manager (name, id, email, officeNum);
            teamMembers.push(manager);
        } else if (value1 === 'Engineer') {
            let ghUsername = value2;
            let {name, id, email } = employeeData;
            const engineer = new Engineer (name, id, email, ghUsername);
            teamMembers.push(engineer);
        } else if (value1 = 'Intern') {
            let school = value2;
            let {name, id, email } = employeeData;
            const intern = new Intern (name, id, email, school);
            teamMembers.push(intern);
        } else {
            console.log("How did you get here? (employeeQuestions constructor function)")
        }
        anotherEmployeeQuestions();
    })
};

// Check to see if user wants to creat another employee
const anotherEmployeeQuestions = () => {
    inquirer.prompt([
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
            `);
            // console.log("Team Members --> ", teamMembers);
            return writeToFile(teamMembers);
        }
    })
};

function writeToFile(fullTeam) {

    const content = generateWebPage(fullTeam);
    fs.writeFile('./dist/index.html', content, err => {
        if (err) {
            console.error(err)
            return
        };
        console.log(`
        =========================
        WROTE FILE SUCCESSFULLY!
        -------------------------
        Check the dist folder for
        the new index.html page!
        -------------------------
        =========================
        `)
    })
}

function init() {
    managerQuestions()
}

init();