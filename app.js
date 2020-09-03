const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeArray = [];

addManager();

function addManager() {
  inquirer
    .prompt([
    {
      type: "input",
      name: "managerName",
      message: "Hi manager, what is your name?"
    },
    {
      type: "input",
      name: "managerID",
      message: "What is your ID?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your email?"
    },
    {
      type: "input",
      name: "managerNumber",
      message: "What is your office number?"
    }
  ]).then( data => {
    const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerNumber);
    employeeArray.push(manager);
    createEngineer()
  })
};

// QUESTIONS TO ADD ENGINEER OR INTERN

function addEng() {
  inquirer
  .prompt([
    {
      type: "confirm",
      name: "engineerChoice",
      message: "Add another engineer?"
    }
  ]).then( val => {
    if(val.engineerChoice) {
      createEngineer()
    } else { createIntern() }
  })
};

function addInt() {
  inquirer
  .prompt([
    {
      type: "confirm",
      name: "internChoice",
      message: "Add another intern?"
    }
  ]).then( val => {
    if(val.internChoice) {
      createIntern()
    } else { createDone(); }
  })
};

// CREATE TEAM

function createEngineer() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is your engineer's name?"
    },
    {
      type: "input",
      name: "engineerID",
      message: "What is their ID?"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is your engineer's email?"
    },
    {
      type: "input",
      name: "managerNumber",
      message: "What is your engineer's GitHub username?"
    }
  ]).then( data => {
    const engineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.managerNumber);
    employeeArray.push(engineer);
    // ADD ANOTHER ENGINEER?
    addEng();
  })
};

function createIntern() {
  inquirer
  .prompt([
    {
      type: "input",
      name: "internName",
      message: "What is your intern's name?"
    },
    {
      type: "input",
      name: "internID",
      message: "What is their ID?"
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is your intern's email?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "What school did your intern attend?"
    }
  ]).then( data => {
    const intern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool);
    employeeArray.push(intern);
    // ADD ANOTHER INTERN?
    addInt()
  })
};

function createDone() {
  // console.log(employeeArray);
  const output = render(employeeArray);
  fs.writeFile("./output/team.html", output, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The team page has been successfully generated in output folder!")
  })
};
