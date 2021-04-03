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



//create a function of generate password
//generating uppercase letters
function getUppercaseLetters(){
  var upperCaseLetters = [];
  for (var i = 65; i < 91; i++) {
    upperCaseLetters.push(String.fromCharCode(i));
  }
  return upperCaseLetters;
}
var upperCaseLetters = getUppercaseLetters();

//generating lowercase letters
function getLowercaseLetters(){
  var lowerCaseLetters = [];
  for (var i = 97; i < 123; i++) {
    lowerCaseLetters.push(String.fromCharCode(i));
  }
  return lowerCaseLetters;
}
var lowerCaseLetters = getLowercaseLetters();

//generating random characters from each field

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
numbers = numbers[randomIndex(numbers.length)];

//function that actually generates the password
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
 console.log(pool)

 //set a string
var password = "";

numbers = numbers[randomIndex(numbers.length)];

  return password;
}

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
