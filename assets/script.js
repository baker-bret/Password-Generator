//incomplete will contiue to work on this

// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [1,2,3,4,5,6,7,8,9,0];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['~','','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>','.','?','/'];
var passwordLength =[1];
// have user select a password length
function passwordLength() { 
  var passwordLength = prompt("Choose the length of your password: between 8 and 128.");

  if (passwordLength <= 7 || passwordLength >= 129) {
    window.alert("Must be a number between 8 and 128.");
  } 
  else if (passwordLength >= 8 && passwordLength < 129) {
    window.alert("Please follow the prompt to get your generated password.");
    charLengthCorrect = true;
    charLength=passwordLength;
  } 
  else {
    window.alert("Enter a number.");
  }
}
// take user input and create corresponding array
function passwordArray() {
  if (charLengthCorrect === true) {
    var length = charLength-1;
    for(var i = 0; i < length; i++) {
      passwordLength.push();
    }
  } 
  else {
    alert("Incorrect data type or size.");
    return;
  }
}

// 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var password=document.getElementById("password");




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page