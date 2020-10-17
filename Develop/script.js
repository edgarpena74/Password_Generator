// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCase = String.prototype.toLowerCase.apply(upperCase).split(",");
let specialChar = ["#","!","$","%","^","&","*","/", "(", ")"]
console.log(specialChar)





// Write password to the #password input
function writePassword() {
  // let password = generatePassword();
  //let passwordText = document.querySelector("#password");

  let length = parseInt(prompt("Choose the length of your password.\nThe password must be between at least 8 characters and no more than 128 characters."));
  console.log(length)


  if (length < 8) {
    alert("Number greater than 8 must be entered.\nPlease press the button to start again.")
    
  } else if (length > 128) {
    alert("Number less than 128 must be entered.\nPlease press the button to start again.")
  } else if (isNaN(length)){
    alert("A number must be entered.\nPlease press the button to start again.")
  } else if (length === false){
    alert ("Please refresh your browser to start again")
  } else {
    let num = length;
    console.log("Test:"+num)
    let ucCon = confirm("Would you like to use upper case letters? \n Select Ok for Yes \n Select Cancel for No");
    console.log(ucCon)
    let lcCon = confirm("Would you like to use lower case letters? \n Select Ok for Yes \n Select Cancel for No");
    console.log(lcCon)
    let spcharCon = confirm("Would you like to use special characters?\n Select Ok for Yes \n Select Cancel for No");
    console.log(spcharCon)
  }
  // passwordText.value = password;

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
