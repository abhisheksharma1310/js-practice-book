//Palindrome

function palindrome(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str.charAt(i) !== str.charAt(str.length - i - 1)) {
      return false;
    }
  }
  return true;
}

function palindrome1(str) {
  str = str.toLowerCase().replace(/\W/g, "");
  return str === str.split("").reverse().join("");
}

console.log(palindrome("racecar"));
console.log(palindrome("A man, a plan, a canal, Panama"));
console.log(palindrome("Hello"));
console.log(palindrome("Madam".charAt(-1)));

console.log(palindrome1("racecar"));
console.log(palindrome1("A man, a plan, a canal, Panama"));
console.log(palindrome1("Hello"));
console.log(palindrome1("Madam".charAt(-1)));
