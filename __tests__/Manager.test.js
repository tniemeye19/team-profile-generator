const Manager = require('../lib/Manager');

test("Create a Manager's office number", () => {
    const manager = new Manager('Nolan', 5555, 'nolan.ryan@gmail.com', 23);

    expect(manager.officeNum).toEqual(expect.any(Number));
})

test("Creates the manager's role", () => {
    role = 'Manager'
    const manager = new Manager('Nolan', 5555, 'nolan.ryan@gmail.com', 23);

    expect(manager.getRole()).toEqual('Manager');
})