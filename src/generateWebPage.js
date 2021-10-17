function createManager(name, id, email, officeNum) {
    return `
            <div class="col employee">
                <div class="name-role">
                    <h3>${name}</h3>
                    <h3><i class="fas fa-mug-hot"></i> Manager</h3>
                </div>
                <div class="employee-info">
                    <div class="info-box">
                        <p>ID: ${id}</p>
                    </div>
                    <div class="info-box">
                        <p>Email: <a href="mailto:${email}">${email}</a></p>
                    </div>
                    <div class="info-box">
                        <p>Office Number: ${officeNum}</p>
                    </div>
                </div>
            </div>
    `
}

function createEngineer(name, id, email, ghUsername) {
    return `
            <div class="col employee">
                <div class="name-role">
                    <h3>${name}</h3>
                    <h3><i class="fas fa-glasses"></i> Engineer</h3>
                </div>
                <div class="employee-info">
                    <div class="info-box">
                        <p>ID: ${id}</p>
                    </div>
                    <div class="info-box">
                        <p>Email: <a href="mailto:${email}">${email}</a></p>
                    </div>
                    <div class="info-box">
                        <p>GitHub Username: <a href="https://github.com/${ghUsername}">${ghUsername}</a></p>
                    </div>
                </div>
            </div>
    `
}

function createIntern(name, id, email, school) {
    return `
            <div class="col employee">
                <div class="name-role">
                    <h3>${name}</h3>
                    <h3><i class="fas fa-user-graduate"></i> Intern</h3>
                </div>
                <div class="employee-info">
                    <div class="info-box">
                        <p>ID: ${id}</p>
                    </div>
                    <div class="info-box">
                        <p>Email: <a href="mailto:${email}">${email}</a></p>
                    </div>
                    <div class="info-box">
                        <p>School: ${school}</p>
                    </div>
                </div>
            </div>
    `
}

function createHTML(employeeSections) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie-edge">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <header class="container-fluid my-team">
        <div class="row">
            <div class="col-12 text-center">
                <h1><span class="align-middle">My Team</span></h1>
            </div>
        </div>
    </header>

    <main class="container-fluid mt-2">
        <section class="row row-cols-3 employee-list">
        ${employeeSections}
        </section>
    </main>
    
</body>
</html>
        `
}


const generateWebPage = function(data) {
    // Create array to store what needs to be created in html
    let teamMembersFull = [];

    // iterate through and create each applicable employee
    for (let i = 0; i < data.length; i++) {
        let employee = data[i];

        // obtain all info generic to all employees
        let name = employee.getName();
        let id = employee.getId();
        let email = employee.getEmail();
        let employeeType = employee.getRole();

        if (employeeType === 'Manager') {
            let officeNum = employee.getOfficeNum();
            const managerSection = createManager(name, id, email, officeNum);
            teamMembersFull.push(managerSection);

        } else if (employeeType === 'Engineer') {
            let ghUsername = employee.getGithub();
            const engineerSection = createEngineer(name, id, email, ghUsername);
            teamMembersFull.push(engineerSection);

        } else if (employeeType === 'Intern') {
            let school = employee.getSchool();
            const internSection = createIntern(name, id, email, school);
            teamMembersFull.push(internSection);

        } else {
            console.log("How did you get here? (generateWebPage Function)");
        }
    }

    // Bring all elements togather...
    const teamSections = teamMembersFull.join('');
    // ... to sent to the function to create the HTML
    return createHTML(teamSections);

}

module.exports = generateWebPage;