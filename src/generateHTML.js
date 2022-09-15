//generateHTML function encapsulates functions that generate cards for each employee
const generateHTML = (employees) => {
    //generateManager generates a card for the manager, using template literals to pass in responses from the inquirer prompts
    const generateManager = (manager) => {
        return  `
<div class="card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
</div>`
    }
    //generateEngineer generates a card for the engineers, using template literals to pass in responses from the inquirer prompts
    const generateEngineer = (engineer) => {
        return `
<div class="card">
  <div class="card-header bg-primary text-white">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
      </ul>
  </div>
</div>
      `
    }
    //generateIntern generates a card for the intern, using template literals to pass in responses from the inquirer prompts
    const generateIntern = (intern) => {
        return `
<div class="card">
    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
</div>
        `
    }
    //htmlArray maps over the passed in employees array and makes a card for each employee
    const htmlArray = employees.map(employee => {
        switch(employee.getRole()) {
            case 'Manager': 
                return generateManager(employee)

            case 'Engineer':
                return generateEngineer(employee)
            case 'Intern':
                default:
                return generateIntern(employee)
            
        }

    })
    //this entire function ultimately returns the htmlArray of generated cards
    return htmlArray
}

//htmlTemplate passes in the generateHTML function which returns the htmlArray of employees and joins each card block together with an empty string
const htmlTemplate = (employees) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>My Team</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
  <div class="container-fluid">
      <div class="row">
          <div class="col-12 jumbotron mb-3 team-heading bg-danger">
              <h1 class="text-center text-white">My Team</h1>
          </div>
      </div>
  </div>
  <div class="container">
      <div class="row">
          <div class="row team-area col-12 d-flex justify-content-center">
              ${generateHTML(employees).join('')}
          </div>
      </div>
  </div>
</body>
</html>`


module.exports = htmlTemplate;