const inquirer = require('inquirer');
const Manager = require('../lib/Manager')

//define manager and push to array
function Questions() {
    this.manager
}

Questions.prototype.createRoster = function() {
    inquirer.prompt(
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        }).then(({name}) => {this.manager = new Manager(name);});
        /* {
            type: 'number',
            name: 'id',
            message: 'What is your employee id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your Email?'
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    )
    .then(({name, id, email, officeNumber}) => {
        this.manager = new Manager(name, id, email, officeNumber);
    }); */
};

//ask if they want to add engineer,intern,or stop

//if engineer or intern, define then push

//if stop, push array to page template and create html page
module.exports = Questions;