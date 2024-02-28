/**
 * Program to count vowels in a string (Iterative and Recursive)
 */

function isVowel(char) {
  return (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  );
}

function countVowels(str) {
  let count = 0;
  str = str.toLowerCase().trim();
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) count++;
  }
  return count;
}

console.log(countVowels("abc de"));
console.log(countVowels("geeksforgeeks portal"));

function countVowelsR (str, n) {
    if(n == 1) return isVowel(str[n-1]);
    return countVowelsR(str, n-1) + isVowel(str[n-1]);
}

const str = "geeksforgeeks portal";

console.log(countVowelsR(str, str.length));
