//require classes created
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//require file of how you turn data into html
const htmlTemplate = require('./src/generateHTML');
//require dependencies
const inquirer = require('inquirer');
const fs = require('fs');

//create a global empty array that employees will be pushed into once created
const employees = [];

//menu gives option of creating new engineer, new intern or ending prompts completely
const menu = function() {
    inquirer
        .prompt(
            {
                type: 'list',
                name: 'menu',
                message: "Would you like to add another employee?",
                choices: ["Engineer", "Intern", "I'm done making my roster"]
            },
        )
        .then (answers => {
            if (answers.menu === "Engineer") {
                engineerPrompt();
            } else if (answers.menu === "Intern") {
                internPrompt();
            } else {
                console.log(employees);
                createHTML();
            }
        })
}

//managerPrompt asks all of the Manager questions, creates a new Manager object and pushes that into the employee array
const managerPrompt = function () {

    inquirer
            .prompt(
                [{
                    type: 'input',
                    name: 'managerName',
                    message: "What is the manager's name?",
                },
                {
                    type: 'input',
                    name: 'managerId',
                    message: "What is the manager's work ID Number?",
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: "What is the manager's email?",
                },
                {
                    type: 'input',
                    name: 'managerOffice',
                    message: "What is the manager's office number?",
                }] 
            )
            .then(answers => {
                //save employees to a global array because we want a list of all of the emps
                //use answers to create a manager class
                const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
                employees.push(manager);
                //invokes menu to ask user if they want to add more employees or stop the prompts
                menu();
            })
}
//engineerPrompt asks all of the Engineer questions, creates a new Engineer object and pushes that into the employee array
const engineerPrompt = function() {
    inquirer   
        .prompt(
            [{
                type: 'input',
                name: 'engineerName',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "What is the engineer's work ID Number?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the engineer's email?",
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the engineer's GitHub username?",
            }]
        )
        .then(answers => {
            const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
            employees.push(engineer);
            menu();
        })
}
//internPrompt asks all of the Intern questions, creates a new Intern object and pushes that into the employee array
const internPrompt = function() {
    inquirer   
        .prompt(
            [{
                type: 'input',
                name: 'internName',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'internId',
                message: "What is the intern's work ID Number?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the intern's email?",
            },
            {
                type: 'input',
                name: 'internSchool',
                message: "What is the intern's current school name?",
            }]
        )
        .then(answers => {
            const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool)
            employees.push(intern);
            menu();
        })
}

//creates the index.html file and uses the htmlTemplate function, passing in the employees array, to create the file
const createHTML = function () {
    fs.writeFile('./dist/index.html', htmlTemplate(employees), function(err){
        if (err) throw err;
    });
}

//invokes managerPrompt to start the application once prompted.
managerPrompt();