const Employee = require('../lib/Employee');

test("Create's Employee Object", () => {
    const employee = new Employee('Timothy', 7891, 'timothy.niemeyer19@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// test("Get's employees name", () => {
//     const employee = new Employee('Timothy', 7891, 'timothy.niemeyer19@gmail.com');

//     expect(employee.getName()).toEqual(expect.any(String));
// })