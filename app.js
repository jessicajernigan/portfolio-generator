const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your Github username!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  console.log(`
=================
Add a New Project
=================
`);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('We are going to need a Github link, bro.');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ]).then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const [name, github] = profileDataArgs;

// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });








//  • | • N O T E S • | • // 
// • Although one cannot reassign the value of a 'const', one can edit the contents of an object or array that have been designated as a const. ;

// The profileDataArgs constant above is an array which holds user command-line arguments.
// In order to extract those arguments and store them as distinct variables, we use the array index using the following expressions.
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// Parentheses are unnecessary in arrow functions when there is one parameter. In this function, which has no parameters, we need parentheses to hold the place where parameters would've been.
// const generatePage = () => 'Name: Jane, Github: janehub'; 

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// // console.log(profileDataArgs);


// const printProfileData = profileDataArr => { // If only one parameter, you can actually omit the parentheses.
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }
//   console.log("================");
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };


// printProfileData(profileDataArgs);

