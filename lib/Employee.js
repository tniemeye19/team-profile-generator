class Employee {
    constructor(name, id, email) {
        id = Math.floor(1000 + Math. random() * 9000);

        this.name = name;
        this.id = id;
        this.email = email;
    }

    // getName() {
    //     return this.name;
    // }
}

module.exports = Employee;