// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
      //Ask user for lenght

let passwordLenght = parseInt(prompt("Minimum of 8 characters, maxium of 50"));
if(passwordLenght < 8 || passwordLenght > 128){
  alert("Error, invalid password lenght.\n Please choose a password greater than 8 and less then 50")
  return"";
}

var includeUpperCase = confirm("Include Uppercase letters in password?");
var includeLowerCase = confirm("Include lowercase letters in password?");
var includeSpecialCharacters = confirm("Includes Special characters in password");
var includeNumbers = confirm("Include Numbers in password");

if(!includeSpecialCharacters && includeLowerCase && includeNumbers && includeLowerCase ) {
  alert("Error, invalid character types. \n Please include at least one type of character.");
  return "";
}

let passwordCharacters = [];
 
// generate random password
const SpecialCharacters =" !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
const Uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYX";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const Numbers ="1234567891011121314151617181920";


if(includeSpecialCharacters){
  passwordCharacters= passwordCharacters.concat(SpecialCharacters.split(""));
}

if(includeUpperCase){
  passwordCharacters= passwordCharacters.concat(Uppercase.split(""));
}
if(includeLowerCase){
  passwordCharacters= passwordCharacters.concat(lowercase.split(""));
}



if(includeNumbers){
  passwordCharacters= passwordCharacters.concat(Numbers.split(""));
}

let results = "";
for (var i = 0; i < passwordLenght; i++) {
let randomIndex = Math.floor(Math.random()* passwordCharacters.length);
let randomCharacter = passwordCharacters[randomIndex];
results += randomCharacter;
}


return results;






}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
