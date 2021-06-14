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
    type: "input",
    name: "License",
    message: "What license is being used?"

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

}
   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
