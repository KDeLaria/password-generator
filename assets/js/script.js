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
  for (var i = 0; i < passwordLength; i++) {
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
// Returns character at the position
function getChars(charId) {
  var alphaChar = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphaChar[charId];
}

// Returns the special character at the position
function getSpecialChars(charId) {
  var specialChar = "!#$%&'()*+,-./:;=>?@[]^_`{|}~".split("");
  return specialChar[charId];
}

// Selects a random character type and compares the random
// against the users selections
function getSelector(isLower, isUpper, isNumber, isSpecialChar) {
  // Selector points to the character type
  // Lowercase: 0, Uppercase: 1, Number: 2, Special characters: 3
  var randomSelector = Math.floor(Math.random() * 4);

  while ((randomSelector === 0 && !isLower) || (randomSelector === 1 && !isUpper) || 
  (randomSelector === 2 && !isNumber) || (randomSelector === 3 && !isSpecialChar)) {
    randomSelector =  Math.floor(Math.random() * 4);
  }
  return randomSelector;
}