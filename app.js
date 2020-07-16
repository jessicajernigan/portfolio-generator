const profileDataArgs = process.argv.slice(2, process.argv.length);
const fs = require('fs');
const generatePage = require('./src/page-template.js');
const [name, github] = profileDataArgs;


fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});








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

