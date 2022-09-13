const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//how you turn data into html
const generateHTML = require('./src/generateHTML');

const inquirer = require('inquirer');
const fs = require('fs');

const employees = [];

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
                menu();
                //call menu here but make it outside of (menu function can have engineer, intern or quit)
            })
}

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

const createHTML = function () {
    //put inside function to create the index.html from array of all employees
    fs.writeFile('index.html', generateHTML(employees), function(err){
        if (err) throw err;
        console.log(err);
    });
}

managerPrompt();