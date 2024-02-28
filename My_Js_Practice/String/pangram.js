/**
 * Check if given String is Pangram or not
 */

function Pangram(str) {
  const arr = new Array(26);
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      arr[charCode - 97] = 1;
    }
  }
  return !arr.includes(undefined);
}

console.log(Pangram("The quick brown fox jumps over the lazy dog"));
console.log(Pangram("The quick brown fox jumps over the dog"));
