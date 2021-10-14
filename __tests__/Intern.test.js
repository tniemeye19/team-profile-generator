const Intern = require('../lib/Intern');

test("Creates an intern's school name", () => {
    const intern = new Intern('James', 3636, 'james.something@gmail.com', 'School');

    expect(intern.school).toEqual(expect.any(String));
})

test("Obtains the intern's school name", () => {
    const intern = new Intern('James', 3636, 'james.something@gmail.com', 'School');

    expect(intern.getSchool()).toEqual(expect.any(String));
})

test("Obtains the intern's role", () => {
    const intern = new Intern('James', 3636, 'james.something@gmail.com', 'School');

    expect(intern.getRole()).toEqual('Intern');
})