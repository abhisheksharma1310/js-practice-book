//write a function to validate password using regex

function validatePassword(pass) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W]).{8,}$/;
  return regex.test(pass);
}

console.log(validatePassword("Abh2dd$w"));
console.log(validatePassword("Abh2dd")); // false (too short, missing special character)
console.log(validatePassword("Abh2dd!!")); // true
console.log(validatePassword("password123")); // false (missing uppercase and special character)
console.log(validatePassword("Pass123!")); // true
