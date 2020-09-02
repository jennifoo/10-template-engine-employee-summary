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

inquirer.prompt([
  {
    type: "list",
    message: "What is your job title?",
    name: "jobtitle",
    choices: [
      "Manager",
      "Engineer",
      "Intern",
    ]
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input", // MANAGER
    name: "officenumber",
    message: "What is your office number?",
    when: (answers) => answers.jobtitle === "Manager"
  },
  {
    type: "input", //ENGINEER
    name: "github",
    message: "What is your GitHub username?",
    when: (answers) => answers.jobtitle === "Engineer"
  },
  {
    type: "input", //INTERN
    name: "school",
    message: "What school are you currently attending?",
    when: (answers) => answers.jobtitle === "Intern"
  }
]).then(function(data){

const employeeArray = [];

if (data.jobtitle === "Manager"){
    const inputManager = ({jobtitle, name, email, officenumber}) => {
          const employee = new Manager(jobtitle, name, email, officenumber);
          employeeArray.push(employee);
          //console.log(employeeArray);
    }
    inputManager(data);
} else if (data.jobtitle === "Engineer"){
    const inputEngineer = ({jobtitle, name, email, github}) => {
          const employee = new Engineer(jobtitle, name, email, github);
          employeeArray.push(employee);
          //console.log(employeeArray);
    }
    inputEngineer(data);
} else {
    const inputIntern = ({jobtitle, name, email, school}) => {
          const employee = new Intern(jobtitle, name, email, school);
          employeeArray.push(employee);
          //console.log(employeeArray);
    }
    inputIntern(data);
}

render(employeeArray);

});


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.


// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```