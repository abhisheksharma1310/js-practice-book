/**
 * Check if a word is present in a sentence
 */

function CheckWord(str, word) {
  str = str.split(" ");
  for (let w of str) {
    if (w === word) return true;
  }
  return false;
}

console.log(CheckWord("Geeks for Geeks", "Geeks"));
console.log(CheckWord("Geeks for Geeks", "eeks"));
