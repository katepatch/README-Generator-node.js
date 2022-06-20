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
        name: 'table of contents',
        message: 'Please list the Table of Contents for each section of README',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please describe the installation instructions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
