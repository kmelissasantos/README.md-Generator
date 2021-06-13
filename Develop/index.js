// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "Title",
    message: "What is the title of the project?",

}, {
    type: "input",
    name: "Description",
    message: "Give a desciption about your project."

}, {
    
}
   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
