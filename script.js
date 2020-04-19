// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.'";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

var lengthInput = true;
var lCaseTrue = true;
var uCaseTrue = true;
var numsTrue = true;
var charsTrue = true;

// Write password to the #password input
function writePassword() {
  var userLength = prompt("How long would you like your password to be? (8-128)");
  if (userLength > 128 || userLength < 8) {
    alert("Please pick a valid number range.");
    lengthInput = false;
  } else {
    lCaseTrue = confirm("Would you like lower case letters in your password?");
    uCaseTrue = confirm("Would you like uppercase letters in your password?");
    numsTrue = confirm("Would you like numbers in your password?");
    charsTrue = confirm("Would you like special characters in your password?");
  }
  function generatePassword() {
    if (lengthInput && lCaseTrue && uCaseTrue && numsTrue && charsTrue) {
      allCasesPW = "";
      for (i = 0; i < userLength; i++) {
        allCasesPW = allCasesPW + getRandomLower() + getRandomUpper() +
          getRandomNumber() + getRandomSymbol();
      }
      return allCasesPW;

    }
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




