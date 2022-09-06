const Employee = require('./Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generateHTML');

const inquirer = require('inquire');
const fs = require('fs');

const employees = [];

const managerPrompt = function () {

    inquirer
    //team managers name, employee ID, email address and office number
    //menu to add an engineer or intern to finish building team
    //engineer name, id, email, github username then taken back to menu
    //intern name, id, email, school, then taken back to menu
    //option to exit once finish building team then html is generate
            .prompt(
                {
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
                    name: 'managerName',
                    message: "What is the manager's name?",
                }, 
            )
            .then(answers => {
                //save employees to a global array because we want a list of all of the emps
                //use answers to create a manager class
                const manager = new Manager (answers.managerName)
                employees.push(manager);
                //call menu here but make it outside of (menu function can have engineer, intern or quit)
            })
}

const engineerPrompt = function() {
    inquirer   
        .prompt(
            {
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
            },
        )
        .then(answers => {
            const engineer = new Engineer (answers.engineerName)
            employees.push(engineer);
        })
}

const internPrompt = function() {
    inquirer   
        .prompt(
            {
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
            },
        )
        .then(answers => {
            const intern = new Intern (answers.internName)
            employees.push(intern);
        })
}
        
        //put inside function to create the index.html from array of all employees
        writeToFile('index.html', generateHTML(manager));