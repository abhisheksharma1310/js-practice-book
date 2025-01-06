// Function to find minimum number of characters needed to make the string
// palindrome.
function minChar(s) {
  // your code here
  let count = 0;
  const r = s.split("").reverse().join("");
  if (s === r) {
    return 0;
  } else {
    for (let i = 0; i < r.length; i++) {
      const chars = r.slice(0, i + 1);
      const res = chars + s;
      if (res === res.split("").reverse().join("")) {
        return i + 1;
      }
    }
  }
}

console.log(minChar("abc"));
console.log(minChar("aacecaaaa"));
console.log(minChar("madam"));
