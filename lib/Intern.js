const Employee = require('./Employee');

// Create intern object/constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        // takes information from Employee constructor
        super(name, id, email);

        this.school = school;
    }

    // returns the intern's school name
    getSchool() {
        return this.school;
    }
    
    // returns the role of 'intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;