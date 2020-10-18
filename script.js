// Assignment Code
let generateBtn = document.querySelector("#generate");
let upperCase = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let lowerCase = String.prototype.toLowerCase.apply(upperCase).split(",");
let specialChar = ["#","!","$","%","^","&","*","/", "(", ")"]
let password =  document.querySelector("#password")

alert('Click "Generate Password" to begin ')

// Write password to the #password input
function writePassword() {
  
  let criteria = []
  
  let pwLength = parseInt(prompt("Choose the length of your password.\nThe password must be between at least 8 characters and no more than 128 characters."));
  console.log(length)


  if (pwLength < 8) {
    alert('Number greater than 8 must be entered.\nPlease click the "Generate Password" to start again.')
    
  } else if (pwLength >128) {
    alert('Number less than 128 must be entered.\nPlease click the "Generate Password" to start again.')
  } else if (isNaN(pwLength)){
    alert('A number must be entered.\nPlease click the "Generate Password" to start again.')
  } else {
    
    
    let ucCon = confirm("Would you like to use upper case letters? \n Select Ok for Yes \n Select Cancel for No");
      if(ucCon === true){ criteria.push(upperCase) }

    let lcCon = confirm("Would you like to use lower case letters? \n Select Ok for Yes \n Select Cancel for No");
      if(lcCon === true){ criteria.push(lowerCase) }  
    
    let spCharCon = confirm("Would you like to use special characters?\n Select Ok for Yes \n Select Cancel for No");
      if(spCharCon === true) { criteria.push(specialChar) }
      
      if (ucCon === false && lcCon === false && spCharCon === false){
      alert('Please select at least one of the criteria for the password. \n Click "Generate Password" to start again')
      console.log("Nothing was picked")
      }
    
      let pass = ""

      while (pass.length < pwLength) {
        for (let i = 0; i < criteria.length; i++) {
          if (pass.length < pwLength) {
            let random = Math.floor(Math.random() * criteria[i].length)
            pass += criteria[i][random]
          }
        }
      }
      console.log(pass, `password length: ${pass.length}`)
      password.textContent = pass
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


