// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  //TODO CODE HERE
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create a function of generate password
function generatePassword(){
  var password = ' ';

  var specialChars = '!@#$%^&*()_+';
  console.log(specialChars[1])
  return password;
}