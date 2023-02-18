//
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);
var numbers = [1,2,3,4,5,6,7,8,9,0];
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['~','','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>','.','?','/'];
var passwordLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() { 
  var passwordLength = prompt("Choose the length of your password: between 8 and 128.");

  while(passwordLength <= 8 || passwordLength > 129) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength = (prompt("Choose the length of your password: between 8 and 128."));
    } 
   
      var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
      var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
      var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
      var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");

      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
      } 


     
      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(special)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numbers)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowercase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(uppercase)
    }

      console.log(passwordCharacters)

     
      var randomPassword = ""
      
      for (var i = 0; i < passwordLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function writePassword() {
  var password = generatePassword();
  var randomPassword = document.querySelector("#password");

  randomPassword.value = password;
}






