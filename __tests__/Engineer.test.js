const Engineer = require('../lib/Engineer');

test("Create an engineer GitHub username", () => {
    const engineer = new Engineer("MacKinnon", 2929, 'nathan.mackinnon@gmail.com', 'pkMacK');

    expect(engineer.ghUsername).toEqual(expect.any(String));
})

test("Obtains an engineer's GitHub username", () => {
    const engineer = new Engineer("MacKinnon", 2929, 'nathan.mackinnon@gmail.com', 'pkMacK');

    expect(engineer.getGithub()).toEqual(expect.any(String));
})

test("Obtains an engineer's role", () => {
    const engineer = new Engineer("MacKinnon", 2929, 'nathan.mackinnon@gmail.com', 'pkMacK');

    expect(engineer.getRole()).toEqual('Engineer');
})