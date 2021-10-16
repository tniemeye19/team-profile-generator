const Employee = require('./Employee');

// create manager object/constructor below
class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        // takes information from Employee constructor
        super(name, id, email);

        this.officeNum = officeNum;
    }

    getOfficeNum() {
        return this.officeNum;
    }

    // Will return the Role of 'Manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;