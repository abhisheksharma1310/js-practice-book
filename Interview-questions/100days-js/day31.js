//Write a function called passwordValidator that takes a single parameter:
//The password must contain at least one lowercase letter, one uppercase letter and one digit.
// the length of the password must be at least 8 characters.
//the function should return true or false

function passwordValidator(pass) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return reg.test(pass);
}

function passwordValidator1(pass) {
  //check minimum length
  if (pass.length < 8) return false;
  //check for at least one lowercase letter
  const hasLowerCase = /[a-z]/.test(pass);
  //check for at least one uppercase
  const hasUpperCase = /[A-Z]/.test(pass);
  //check for at least one digit
  const hasDigit = /[0-9]/.test(pass);

  return hasLowerCase && hasUpperCase && hasDigit;
}

console.log(passwordValidator("")); // false
console.log(passwordValidator("abc")); // false
console.log(passwordValidator("Abcdefgh")); // false
console.log(passwordValidator("Abcdefg1")); // true
