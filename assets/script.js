var generateBtn= document.querySelector("#generate").addEventListener("click", passwordGenerate);
var numbers= [1,2,3,4,5,6,7,8,9,0];
var lowercase= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special= ['~','','`','!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','[','}',']','|',':',';','<',',','>','.','?','/'];
var passwordLength= "";
var confirmSpecial;
var confirmNumber;
var confirmUpperCase;
var confirmLowerCase;

function generatePassword() {

  var passwordLength= prompt("Choose the length of your password: between 8 and 128.");

  while(passwordLength<= 8 || passwordLength > 129) {
    alert("Password length must be between 8-128 characters Try again");
    var confirmLength= (prompt("Choose the length of your password: between 8 and 128."));
    } 
    var confirmNumber= confirm("Would you like to use numbers? OK for Yes cancel for No");    
    var confirmSpecial= confirm("Would you like to use special Characters? OK for Yes cancel for No");
    var confirmUpperCase= confirm("Would you like to use uppercase letters? OK for Yes cancel for No");
    var confirmLowerCase= confirm("Would you like to use lowercase letters? OK for Yes cancel for No");
      while(confirmUpperCase=== false && confirmLowerCase === false && confirmSpecial === false && confirmNumber === false) {
        alert("Choose at least one option");
        var confirmNumber= confirm("Would you like to use numbers? OK for Yes cancel for No");    
        var confirmSpecial= confirm("Would you like to use special Characters? OK for Yes cancel for No");
        var confirmUpperCase= confirm("Would you like to use uppercase letters? OK for Yes cancel for No");   
        var confirmLowerCase= confirm("Would you like to use lowercase letters? OK for Yes cancel for No");
      } 
      var passwordCharacters= []
      if (confirmNumber) {
        passwordCharacters= passwordCharacters.concat(numbers)
      } 
      if (confirmSpecial) {
        passwordCharacters= passwordCharacters.concat(special)
      }
    if (confirmLowerCase) {
      passwordCharacters= passwordCharacters.concat(lowercase)
    }
    if (confirmUpperCase) {
      passwordCharacters= passwordCharacters.concat(uppercase)
    }
      console.log(passwordCharacters)
      var randomPassword = ""
      for (var i= 0; i < passwordLength; i++) {
        randomPassword= randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

function passwordGenerate() {
  var password= generatePassword();
  var randomPassword= document.querySelector("#password");

  randomPassword.value= password;
}






