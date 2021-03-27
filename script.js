// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //TODO CODE HERE
  passwordText.value = password;

}



//create a function of generate password
function getUppercaseLetters(){
  var upperCaseLetters = [];
  for (var i = 65; i < 91; i++) {
    upperCaseLetters.push(String.fromCharCode(i));
  }
  return upperCaseLetters;
}


function generatePassword(){
  //TODO: Define characters we will use
  var upperCaseLetters = getUppercaseLetters();
  console.log("Uppercase Letters ", upperCaseLetters);
}
getUppercaseLetters();
generatePassword();
  // var password = ' ';

  // var specialChars = '!@#$%^&*()_+';
  // console.log(specialChars[1]) //array notation for strings is valid
  // return password;


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);