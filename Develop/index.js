// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description of your new project.',
    }, 
    
    {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe usage of project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'please add project license',
        choices: ['MIT', 'ISC', 'WTFPL'],
        filter(val) {
            return val.toLowerCase();
        },
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'please add contributions',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'please include tests',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide email'
    }

];

async function runQuestions () {
    return inquirer.prompt(questions)
    .then ((answers) => {
        console.log(answers)
        return answers
    })
    .catch((error) => {
        console.log(error)
    })
}

runQuestions();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
