// importing the external packages 
const fs = require('fs');
const inquirer = require('inquirer');
const { generate } = require('rxjs');

// Import the classes from Emplyee, Engineer, Intern, Manager.. 
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const mainHTML = fs.readFileSync("./src/main.html", "utf8")

// why do I need this array to store my employees?
const team = [];

// manager prompt 
const managerPrompt = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: "What type of employee would you like to hire?",
            choices: ['Engineer', 'Intern', 'None']
        }
        ])
        .then((managerRes) => {
            const manager = new Manager(managerRes.name, managerRes.id, managerRes.email, managerRes.officeNumber);

            //adding manager info into the array
            team.push(manager)

            if (managerRes.addEmployee === 'Engineer') {
                engineerPrompt();
            } else if (managerRes === 'Intern') {
                internPrompt();
            } else {
                generateHTML()
            }
        })
}

// Engineer prompt 
const engineerPrompt = () => {
    return inquirer
        .prompt([{
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's ID number?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'GitHub',
            message: "What is the engineer's GitHub account?"
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: "What type of employee would you like to hire?",
            choices: ['Engineer', 'Intern', 'None']
        }
        ])
        .then((engineerRes) => {
            const engineer = new Engineer(engineerRes.name, engineerRes.id, engineerRes.email, engineerRes.GitHub);

            team.push(engineer);

            if (engineerRes.addEmployee === 'Engineer') {
                engineerPrompt();
            } else if (engineerRes.addEmployee === 'Intern') {
                internPrompt();
            } else {
                generateHTML();
            }
        })
}

// function to obtain intern info
const internPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school name?"
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: "What type of employee would you like to add?",
                choices: ['Engineer', 'Intern', 'None']
            }
        ])
        .then((internRes) => {

            const intern = new Intern(internRes.name, internRes.id, internRes.email, internRes.school);

            team.push(intern);

            if (internRes.addEmployee === 'Engineer') {
                engineerPrompt();
            } else if (internRes.addEmployee === 'Intern') {
                internPrompt();
            } else {
                generateHTML();
            }
        })
}

// function to intialize data input
const init = () => {
    console.log("Please build your team");
    managerPrompt();
};

// function to render HTML from team array
// need help understanding this portion of the code!
const renderHTML = (team) => {
    return team.map(a => a.createHTML()).join("");
}


// function to generate HTML file
const generateHTML = () => {
    let testArray = renderHTML(team);
    console.log(testArray);
    // write HTML file using mainHTML and renderHTML
    fs.writeFile('./dist/team.html', mainHTML.replace("{{body}}", renderHTML(team)), (err) => {
        err ? console.log(err) : console.log('Successfully created team.html!');
    });
}

// initialize
init();