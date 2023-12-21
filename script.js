// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password requirements
// prompt for length, at least 8 characters and no more than 128 characters
// confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// input should be validated and at least one character type should be selected

// Generates a password and returns it
function generatePassword() {
  var passwordLength = Number.parseInt(prompt("Enter password length (8 to 128). \nPassword length: "));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect password length of " + passwordLength.toString() + ".\nPassword must be between 8 and 128 in length");
    return "Please try again";
  }
  else if (!Number.isInteger(passwordLength)) {
    alert("The length must be a number.");
    return "Please try again";
  }

  var hasLowerCase = confirm("Click OK if you would like include lowercase characters");
  var hasUpperCase = confirm("Click OK if you would like include lowercase characters");
  var hasNumbers = confirm("Click OK if you would like include lowercase characters");
  var hasSpecialChars = confirm("Click OK if you would like include special characters");

  if (hasLowerCase || hasUpperCase || hasNumbers || hasSpecialChars) {
    return generateRandomCharacters(passwordLength, hasLowerCase, hasUpperCase, hasNumbers, hasSpecialChars);
  }
  else {
    alert("You must select at least one character type. \n\nCharacter types are: lowercase, uppercase, numeric, and/or special characters")
    return "Please try again";
  }
}

function generateRandomCharacters(passwordLength, isLowerCase, isUppercase, isNumbers, isSpecialChars) {
  var newPassword = "";
  for (var i = 0; passwordLength > i; i++) {
    var randomNumber = 0;
    if (isNumbers) {
      randomNumber = Math.floor(Math.random() * 10);
      newPassword = newPassword.concat(randomNumber.toString());
    }
    else if (isSpecialChars) {
      // "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"
      randomNumber = Math.floor(Math.random() * 30);
      newPassword = newPassword.concat(getSpecialChars(randomNumber));
    }
    else {
      randomNumber = Math.floor(Math.random() * 26);
      if (isLowerCase) {
        newPassword = newPassword.concat(getChars(randomNumber));
      }
      else if (isUppercase) {
        newPassword = newPassword.concat(getChars(randomNumber).toUpperCase());
      }
    }
    return newPassword;
  }
}

function getChars (charId) {
  if (charId == 0) {  return "a"  }
  else if (charId == 1) { return "b"; }
  else if (charId == 2) { return "c"; }
  else if (charId == 3) { return "d"; }
  else if (charId == 4) { return "e"; }
  else if (charId == 5) { return "f"; }
  else if (charId == 6) { return "g"; }
  else if (charId == 7) { return "h"; }
  else if (charId == 8) { return "i"; }
  else if (charId == 9) { return "j"; }
  else if (charId == 10) { return "k"; }
  else if (charId == 11) { return "l"; }
  else if (charId == 12) { return "m"; }
  else if (charId == 13) { return "n"; }
  else if (charId == 14) { return "o"; }
  else if (charId == 15) { return "p"; }
  else if (charId == 16) { return "q"; }
  else if (charId == 17) { return "r"; }
  else if (charId == 18) { return "s"; }
  else if (charId == 19) { return "t"; }
  else if (charId == 20) { return "u"; }
  else if (charId == 21) { return "v"; }
  else if (charId == 22) { return "w"; }
  else if (charId == 23) { return "x"; }
  else if (charId == 24) { return "y"; }
  else if (charId == 25) { return "z"; }
}

function getSpecialChars () {
  
}