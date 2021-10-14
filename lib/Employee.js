class Employee {
    constructor(name, id, email) {
        id = Math.floor(1000 + Math. random() * 9000);

        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Will return employee's name from input
    getName() {
        return this.name;
    }

    // Will return employee's id from input
    getId() {
        return this.id;
    }

    // Will return employee's email from input
    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;