const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);






const printProfileData = profileDataArr => { // If only one parameter, you can actually omit the parentheses.
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }
  console.log("================");
  profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs);





//  • | • N O T E S • | • // 
// • Although one cannot reassign the value of a 'const', one can edit the contents of an object or array that have been designated as a const. ;