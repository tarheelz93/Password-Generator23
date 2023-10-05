// Assignment Code
var generateBtn = document.querySelector("#generate");

 // generates a random password based on criteria given
 function generatePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";

  var passwordLength = parseInt(window.prompt("Enter the number of characters you want in your password:"));
 

 
 if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  window,alert("Your password length must be between 8 and 128 characters.");
  return;
}

var includeLowercase = window.confirm("Include lowercase characters?");
var includeUppercase = window.confirm("Include uppercase characters?");
var includeNumeric = window.confirm("Include numeric characters?");
var includeSpecial = window.confirm("Include special characters?");

if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
  window.alert("You must select at least one character type.");
  return;
}

var allowedChars = "";

if (includeLowercase) allowedChars += lowercaseChars;
if (includeUppercase) allowedChars += uppercaseChars;
if (includeNumeric) allowedChars += numericChars;
if (includeSpecial) allowedChars += specialChars;

var password = "";

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allowedChars.length);
  password += allowedChars.charAt(randomIndex);
}

return password;
 }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

if (password) {
  passwordText.value =  password;

  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




