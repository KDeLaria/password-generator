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
    return "Please try again.";
  }
  else if (!Number.isInteger(passwordLength)) {
    alert("The length must be a number.");
    return "Please try again.";
  }

  var isLowerCase = confirm("Click OK if you would like include lowercase characters");
  var isUpperCase = confirm("Click OK if you would like include uppercase characters");
  var isNumber = confirm("Click OK if you would like include numbers characters");
  var isSpecialChar = confirm("Click OK if you would like include special characters");

  if (isLowerCase || isUpperCase || isNumber || isSpecialChar) {
    return generateRandomCharacters(passwordLength, isLowerCase, isUpperCase, isNumber, isSpecialChar);
  }
  else {
    alert("You must select at least one character type. \n\nCharacter types are: lowercase, uppercase, numeric, and/or special characters.")
    return "Please try again";
  }
}

// Loops through each character and attaches a random one to the password that will be returned
function generateRandomCharacters(passwordLength, isLowerCase, isUppercase, isNumber, isSpecialChar) {
  var newPassword = "";
  for (var i = 0; passwordLength > i; i++) {
    var selector = getSelector(isLowerCase, isUppercase, isNumber, isSpecialChar);
    var randomNumber;
    if (selector === 2) {
      randomNumber = Math.floor(Math.random() * 10);
      newPassword = newPassword.concat(randomNumber.toString());}
    else if (selector === 3) {
      // "!#$%&'()*+,-./:;=>?@[]^_`{|}~"
      randomNumber = Math.floor(Math.random() * 29);
      newPassword = newPassword.concat(getSpecialChars(randomNumber));}
    else {
      randomNumber = Math.floor(Math.random() * 26);
      if (selector === 0) {
        newPassword = newPassword.concat(getChars(randomNumber));}
      else if (selector === 1) {
        newPassword = newPassword.concat(getChars(randomNumber).toUpperCase());}
    }
  }
  return newPassword;
}

function getChars(charId) {
  if (charId === 0) { return "a" }
  else if (charId === 1) { return "b"; }
  else if (charId === 2) { return "c"; }
  else if (charId === 3) { return "d"; }
  else if (charId === 4) { return "e"; }
  else if (charId === 5) { return "f"; }
  else if (charId === 6) { return "g"; }
  else if (charId === 7) { return "h"; }
  else if (charId === 8) { return "i"; }
  else if (charId === 9) { return "j"; }
  else if (charId === 10) { return "k"; }
  else if (charId === 11) { return "l"; }
  else if (charId === 12) { return "m"; }
  else if (charId === 13) { return "n"; }
  else if (charId === 14) { return "o"; }
  else if (charId === 15) { return "p"; }
  else if (charId === 16) { return "q"; }
  else if (charId === 17) { return "r"; }
  else if (charId === 18) { return "s"; }
  else if (charId === 19) { return "t"; }
  else if (charId === 20) { return "u"; }
  else if (charId === 21) { return "v"; }
  else if (charId === 22) { return "w"; }
  else if (charId === 23) { return "x"; }
  else if (charId === 24) { return "y"; }
  else if (charId === 25) { return "z"; }
}
// "!#$%&'()*+,-./:;=>?@[]^_`{|}~"
function getSpecialChars(charId) {
  if (charId === 0) { return "!" }
  else if (charId === 1) { return "#"; }
  else if (charId === 2) { return "$"; }
  else if (charId === 3) { return "%"; }
  else if (charId === 4) { return "&"; }
  else if (charId === 5) { return "'"; }
  else if (charId === 6) { return "("; }
  else if (charId === 7) { return ")"; }
  else if (charId === 8) { return "*"; }
  else if (charId === 9) { return "+"; }
  else if (charId === 10) { return ","; }
  else if (charId === 11) { return "-"; }
  else if (charId === 12) { return "."; }
  else if (charId === 13) { return "/"; }
  else if (charId === 14) { return ":"; }
  else if (charId === 15) { return ";"; }
  else if (charId === 16) { return "="; }
  else if (charId === 17) { return ">"; }
  else if (charId === 18) { return "?"; }
  else if (charId === 19) { return "@"; }
  else if (charId === 20) { return "["; }
  else if (charId === 21) { return "]"; }
  else if (charId === 22) { return "^"; }
  else if (charId === 23) { return "_"; }
  else if (charId === 24) { return "`"; }
  else if (charId === 25) { return "{"; }
  else if (charId === 26) { return "|"; }
  else if (charId === 27) { return "}"; }
  else if (charId === 28) { return "~"; }
}

// Selects a random character type and compares the random
// against the users selections
function getSelector(isLower, isUpper, isNumber, isSpecialChar) {
  // Selector points to the character type
  // Lowercase: 0, Uppercase: 1, Number: 2, Special characters: 3
  var randomSelector = Math.floor(Math.random() * 4);
  if ((randomSelector === 0 && isLower) || (randomSelector === 1 && isUpper) || 
  (randomSelector === 2 && isNumber) || (randomSelector === 3 && isSpecialChar))  {
    return randomSelector;
  }
  else {
    getSelector();
  }

}