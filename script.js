// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];

const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; 

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Array based on user responses
var userChars = [];
//Password length
var passwordLength = 8



// Assignment Code and Prompts for PW options

var generateBtn = document.querySelector("#generate");
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Need to get user responses aka prompts
function getInput(){
  var userChars = [];
  var passwordLength = parseInt(prompt("How many characters do you want your password to be? (Min 8 Max 128)"));

    // I want these responses to be false to move on with prompts
    if ( passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
      alert("Password length must be between 8 - 128 digits and a number. Please re-submit");
      return false;
    }
    //True or false (okay / cancel) responses will be stored in userChars and combined with concat
    if (confirm("Would you like special characters in your password?")) {
      userChars = userChars.concat(specialChars);
    }
    if (confirm("Would you like numbers in your password?")) {
      userChars = userChars.concat(numberChars);
    }
  
    
}

getInput();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate Password 
function generatePassword() {

}