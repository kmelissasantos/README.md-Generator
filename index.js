// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatorMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Title",
    message: "What is the title of the project?",
    validate: (input) => {
        if (input === '') {
            return "Please enter title here."
        }
        return true;
    }
}, {
    type: "input",
    name: "Description",
    message: "Give a desciption about your project.",
    validate: (input) => {
        if (input === '') {
            return "Please give description of your project."
        }
        return true;
    }
}, {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents"

}, {
    type: "input",
    name: "Installation",
    message: "What does the user need to install to run this app?",

}, {
    type: "input",
    name: "Usage",
    message: "Enter project instructions and how the app is used."

}, {
    type: "list",
    name: "License",
    message: "What license is being used?",
    choices: ['Apache', 'Boost', 'BSD', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'SIL', 'Unlicense', 'Zlib', 'None'],

}, {
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project?"

}, {
    type: "input",
    name: "Tests",
    message: "What commands are needed to test this app?"

}, {
    type: "input",
    name: "Questions",
    message: "What is your contact info for inquiries?"

}, {
    type: "input",
    name: "Username",
    message: "What is your Github username?"

}, {
    type: "input",
    name: "Email",
    message: "What is your email address?"

},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log (err);
        }
        else {
            console.log("Success");
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
};

// Function call to initialize app
init();
