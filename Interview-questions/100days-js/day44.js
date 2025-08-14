//Write function to validate email using regex

function validateEmail(email) {
  const regex =
    /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9]+([_-][A-Za-z0-9]+)*\.[a-z]{2,8}(\.[a-z]{2,8})?$/;
  return regex.test(email);
}

console.log(validateEmail("abh.kum12-sh_sh%er@yahoo.co.in")); // ✅ true
console.log(validateEmail("abh.kum12-sh@yahoo.com")); // ✅ true
console.log(validateEmail("abh.kum12-sh@yahoo-mail.com")); // ✅ true
console.log(validateEmail("abh..kum12-sh@yahoo-mail.com")); // ❌ false
console.log(validateEmail("abh.kum12-sh@yahoo--mail.co.in")); // ❌ false
console.log(validateEmail("abh.kum12-sh@yahoo-mail.c-o.in")); // ❌ false
console.log(validateEmail("abh.kum12-sh.@yahoo.com")); // ❌ false
console.log(validateEmail("-abh.kum12@yahoo.com")); // ❌ false
console.log(validateEmail("abh.kum12-@yahoo.com")); // ❌ false
