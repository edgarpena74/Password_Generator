// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCase = String.prototype.toLowerCase.apply(upperCase).split(",");
let specialChar = ["#","!","$","%","^","&","*","/"]
console.log(specialChar)



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//First:Prompt user about length of password
//Second:set criteria as tru or false. user would 
//user would choose cancel for no ok for yes
//Criteria incluse lowercase, uppercase, numbers, and special char
//***make sure the choose at least one criteria */
//Third: display password as alert or written to the page.
//TRY to make it written on page



//Make an Array of characters, numbers and Special Characters
