// Assignment code here
function generatePassword() {
  // Prompt user for password criteria
  var length = prompt("Please enter the length of your password. Password length must be between 8 and 128 characters.");
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }
  var includeLowercase = confirm("Click OK to confirm including lowercase characters.");
  var includeUppercase = confirm("Click OK to confirm including uppercase characters.");
  var includeNumbers = confirm("Click OK to confirm including numeric characters.");
  var includeSpecial = confirm("Click OK to confirm including special characters.");

  // Define character sets based on user criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+,<.>/?";

  // Initialize password variable
  var password = "";

  // Build character set based on user criteria
  var charSet = "";
  if (includeLowercase) {
    charSet += lowercaseChars;
  }
  if (includeUppercase) {
    charSet += uppercaseChars;
  }
  if (includeNumbers) {
    charSet += numericChars;
  }
  if (includeSpecial) {
    charSet += specialChars;
  }

  // Generate password
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  // Return generated password
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);