const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const teamMembers = [];

const promptManager = async () => {
    console.log("Please enter the manager's information:");
    const managerAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Manager's name:",
          },
          {
            type: "input",
            name: "id",
            message: "Manager's ID:",
          },
          {
            type: "input",
            name: "email",
            message: "Manager's email:",
          },
          {
            type: "input",
            name: "officeNumber",
            message: "Manager's office number:",
          },
        ]);
        const manager = new Manager(
            managerAnswers.name,
            managerAnswers.id,
            managerAnswers.email,
            managerAnswers.officeNumber
          );
          teamMembers.push(manager);
        };
        