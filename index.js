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

// manager information function (user prompt)
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



function promptUser() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "memberType",
          message: "Choose the team member's role:",
          choices: ["Engineer", "Intern", "Finish building the team"],
        },
      ])
      .then((answer) => {
        if (answer.memberType === "Engineer") {
          promptEngineer();
        } else if (answer.memberType === "Intern") {
          promptIntern();
        } else {
          generateHTML();
        }
      });
  }


 // user prompt for engineer information
const promptEngineer = async () => {
    console.log("Please enter the engineer's information:");
    const engineerAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Engineer's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Engineer's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Engineer's email:",
        },
        {
            type: "input",
            name: "github",
            message: "Engineer's GitHub username:",
        },
    ]);
    const engineer = new Engineer(
        engineerAnswers.name,
        engineerAnswers.id,
        engineerAnswers.email,
        engineerAnswers.github
    );
    teamMembers.push(engineer);
    promptUser();  // <---- Continue to add more team members

};

// user prompt for intern information

const promptIntern = async () => {
    console.log("Please enter the intern's information:");
    const internAnswers = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Intern's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Intern's ID:",
        },
        {
            type: "input",
            name: "email",
            message: "Intern's email:",
        },
        {
            type: "input",
            name: "school",
            message: "Intern's school:",
        },
    ]);
    const intern = new Intern(
        internAnswers.name,
        internAnswers.id,
        internAnswers.email,
        internAnswers.school
    );
    teamMembers.push(intern);
    promptUser(); }; // prompt to add more team members


    //generate HTML using the render function :)
function generateHTML() {
    const html = render(teamMembers);
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    } //<-- this is to check if the directory folder exists, if now then it will create one.

    fs.writeFileSync(outputPath, html);

    console.log("HTML file generated successfully!");
}
