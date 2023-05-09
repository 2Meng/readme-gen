const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description about your project!'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'GPL3.0', 'BSD2' ,'BSD3', 'None']
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors in this repository?'
    },
];

// writes README file
function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init(){
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log('Generating README...');
            writeToFile('./demo/README.md', generateMarkdown(inquirerAnswers))
        })
}

init();