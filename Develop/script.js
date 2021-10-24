// Assignment code here
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// converts letters to uppercase 
var toUpper = function (x) {
  return x.toUpperCase();
};
// creates a variable for uppercase conversion
var alpha2 = alpha.map(toUpper);


var passwordLengh = function(){
var passLengh = parseInt(prompt("How many characters would you like?"));
     while (!passLengh) {
       lengh = parseInt(prompt("Invalid option! How many characters would you like?"));
     }
     if (passLengh > 128 || passLengh < 8) {
       alert("You must choose a length of at least 8 characters and no more than 128 characters!");
       return passwordLengh();
     }
     console.log(passLengh);
       return passLengh;
     }

var matches = function() {
       var confirmNumber = confirm("Will this contain numbers?");
       var confirmCharacter = confirm("Will this contain special characters?");
       var confirmUppercase = confirm("Will this contain Uppercase letters?");
       var confirmLowercase = confirm("Will this contain Lowercase letters?");

       // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      alert("You must choose a criteria!");
      matches();

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

     var choices = character.concat(number, alpha, alpha2);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
     var choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
     var choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
     var choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
     var choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
     var choices = character.concat(number);

  } else if (confirmCharacter && confirmLowercase) {
     var choices = character.concat(alpha);

  } else if (confirmCharacter && confirmUppercase) {
     var choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
     var choices = alpha.concat(number);

  } else if (confirmLowercase && confirmUppercase) {
     var choices = alpha.concat(alpha2);

  } else if (confirmNumber && confirmUppercase) {
     var choices = number.concat(alpha2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
     var choices = character;
  }
  else if (confirmNumber) {
     var choices = number;
  }
  else if (confirmLowercase) {
     var choices = alpha;
  }


}

var generatePassword = function() {
  passwordLengh();
  matches();
  for (var i = 0; i < passwordLengh; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}


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
