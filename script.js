// Assignment Code
var generateBtn = document.querySelector("#generate");

//All randomised character functions
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

var randArray = [getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol()]
var randString = randArray.join("");
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
    allCasesPW = "";

    //Everything
    if (lengthInput && lCaseTrue && uCaseTrue && numsTrue && charsTrue) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomSymbol()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 4);
      }
    }


    //No Special Characters
    if (lengthInput && lCaseTrue && uCaseTrue && numsTrue && charsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomLower(), getRandomUpper(), getRandomNumber()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 3);
      }
    }
    //No lowercase 
    if (lengthInput && lCaseTrue === false && uCaseTrue && numsTrue && charsTrue) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomUpper(), getRandomNumber(), getRandomSymbol()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 3);
      }
    }
    //No Uppercase 
    if (lengthInput && uCaseTrue === false && numsTrue && charsTrue && lCaseTrue) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomNumber(), getRandomSymbol(), getRandomLower()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 3);
      }
    }
    //No Numbers
    if (lengthInput && charsTrue && lCaseTrue && uCaseTrue && numsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomNumber(), getRandomSymbol(), getRandomLower()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 3);
      }
    }

    //No Numbers or Special Characters
    if (lengthInput && lCaseTrue && uCaseTrue && numsTrue === false && charsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomLower(), getRandomUpper()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 2);
      }
    }
    //No Special Characters or lowercase
    if (lengthInput && lCaseTrue === false && uCaseTrue && numsTrue && charsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomUpper(), getRandomNumber()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 2);
      }
    }
    //No lowercase or Uppercase
    if (lengthInput && lCaseTrue === false && uCaseTrue === false && numsTrue && charsTrue) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomNumber(), getRandomSymbol()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 2);
      }
    }
    //No Uppercase or Numbers
    if (lengthInput && lCaseTrue && uCaseTrue === false && numsTrue === false && charsTrue) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomSymbol(), getRandomLower()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random() * 2);
      }
    }

    //No Uppercase, Numbers, or Special Characters
    if (lengthInput && lCaseTrue && uCaseTrue === false && numsTrue === false && charsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomLower()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random());
      }
    }
    //No lowercase, Numbers, or Special Characters 
    if (lengthInput && lCaseTrue === false && uCaseTrue && numsTrue === false && charsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomUpper()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random());
      }
    }
    //No lowercase, Uppercase, or Special Characters
    if (lengthInput && lCaseTrue === false && uCaseTrue === false && numsTrue && charsTrue === false) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomNumber()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random());
      }
    }
    //No lowercase, Uppercase, or Numbers
    if (lengthInput && lCaseTrue === false && uCaseTrue === false && numsTrue === false && charsTrue) {
      for (i = 0; i < userLength; i++) {
        randArray = [getRandomSymbol()]
        randString = randArray.join("");
        allCasesPW = allCasesPW + randString.charAt(Math.random());
      }
    }
    return allCasesPW
  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




