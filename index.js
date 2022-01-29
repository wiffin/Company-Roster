const inquirer = require('inquirer')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageTemplate = require('./src/page-template');
const path = require('path')
const fs = require('fs')
const teamMembers = [];

function createRoster() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is your employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email?'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    ])
    .then(({name,id,email,officeNumber}) => {
        const manager = new Manager(name, id, email, officeNumber);
        teamMembers.push(manager)
        addEmployee();
    });
};

//ask if they want to add engineer,intern,or stop

function addEmployee() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'nextEmployee',
            message: 'Who do you want to add to the roster?',
            choices: ['Intern', 'Engineer', 'No one']
        }
    )
    .then(answer => { 
        if (answer.nextEmployee === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'What is your employee id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your Email?'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What school do you attend?'
                }
            ])
            .then((name,id,email,school) => {
                const intern = new Intern(name, id, email, school);
                teamMembers.push(intern)
                addEmployee();
            });
        } else if (answer.nextEmployee === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?'
                },
                {
                    type: 'number',
                    name: 'id',
                    message: 'What is your employee id?'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your Email?'
                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your github?'
                }
            ])
            .then(({name,id,email,github}) => {
                const engineer = new Engineer(name, id, email, github);
                teamMembers.push(engineer)
                addEmployee();
            }); 
        } else {
            generatePageTemplate()
        }
    });
}

function generatePageTemplate() {
    fs.writeFile('./dist/index.html', pageTemplate(teamMembers), err => {
        if (err) throw err;
    });
};

createRoster()