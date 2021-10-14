const Employee = require('./Employee');

// create engineer object/constructor below
class Engineer extends Employee {
    constructor(name, id, email, ghUsername) {
        // takes information from Employee constructor
        super(name, id, email);

        this.ghUsername = ghUsername;
    }

    // obtains github username
    getGithub() {
        return this.ghUsername;
    }

    // Returns the role of 'engineer'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;