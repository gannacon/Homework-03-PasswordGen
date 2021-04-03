// Assignment Code
var generateBtn = document.querySelector("#generate");
var pool;
var password;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //TODO CODE HERE
  passwordText.value = password;

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// DECLARE ADN RANDOMIZE LETTERS, SPEICALS, AND NUMBERS

//generating uppercase letters charcode
function getUppercaseLetters(){
  var upperCaseLetters = [];
  for (var i = 65; i < 91; i++) {
    upperCaseLetters.push(String.fromCharCode(i));
  }
  return upperCaseLetters;
}
var upperCaseLetters = getUppercaseLetters();
upperCaseLetters = upperCaseLetters[randomIndex(upperCaseLetters.length)];



//generating lowercase letters from charcode
function getLowercaseLetters(){
  var lowerCaseLetters = [];
  for (var i = 97; i < 123; i++) {
    lowerCaseLetters.push(String.fromCharCode(i));
  }
  return lowerCaseLetters;
}
var lowerCaseLetters = getLowercaseLetters();
lowerCaseLetters = lowerCaseLetters[randomIndex(lowerCaseLetters.length)];

//special characters array
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
specialChars = specialChars[randomIndex(specialChars.length)];

//numbers array
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
numbers = numbers[randomIndex(numbers.length)];
//convert numbers to a string to be able to write into the password as text
numbers = numbers.toString()


//-----------------------------------------------------------------------------------------------------------------------------------------------------------
//FUNCTION THAT GENERATES THE PASSWORD
function generatePassword(){

//Prompt to get password length
var getpasswordLength = prompt("Please choose a password length of at least 8 characters and no more than 128 characters.")
if (getpasswordLength < 8 || getpasswordLength > 128) {
  confirm("You must choose a value between 8 and 128.");
  generatePassword();
} else {
  confirmUpperCase = confirm("Would you like uppercase letters in your password?");
  confirmLowerCase = confirm("Would you like lowercase letters in your password?");
  confirmSpecialChars = confirm("Would you like special characters in your password?");
  confirmNumbers = confirm("Would you like numbers in your password?");
}

// Create a pool array to store all confirm values
var pool = [];

// Using concat to write the variable to the pool based on true input from confirm
if(confirmUpperCase){
  pool = pool.concat(upperCaseLetters);
}

if(confirmLowerCase){
  pool = pool.concat(lowerCaseLetters);
}

if(confirmSpecialChars){
  pool = pool.concat(specialChars);
}

if(confirmNumbers){
  pool = pool.concat(numbers);
}
//console log to check what is being concat into array
 console.log(pool);

 //set a string
var password = "";

for (var i=0; i<getpasswordLength; i++){
  password = password + pool[Math.floor(Math.random() * password.length)];
 console.log(password);
}
console.log(password);
// numbers = numbers[randomIndex(numbers.length)];

  return password;
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// DECLARING FUNCTIONS

//function to randomize the length of the array length. CAN REUSE ON ANY ARRAY TO RETURN A RANDOM LENGTH NUMBER
function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

getUppercaseLetters();
getLowercaseLetters();
randomIndex();
generatePassword();


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);