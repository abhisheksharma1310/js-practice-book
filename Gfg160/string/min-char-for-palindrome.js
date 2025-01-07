// Function to find minimum number of characters needed to make the string
// palindrome.
function minChar(s) {
  // your code here
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

function isPalindrome(s, i, j) {
  while (i < j) {
    if (s[i] !== s[j]) return false;
    i++;
    j--;
  }
  return true;
}
function minChar1(s) {
  let n = s.length - 1;
  let count = 0;
  while ((n > 0) & !isPalindrome(s, 0, n)) {
    n--;
    count++;
  }
  return count;
}

function computeLPSArray(pat) {
  let n = pat.length;
  let lps = new Array(n).fill(0);
  let len_lps = 0; // lps[0] is always 0
  // loop calculates lps[i] for i=1 to n-1
  let i = 1;
  while (i < n) {
    // if the characters match, increment len
    // and set lps[i]
    if (pat[i] === pat[len_lps]) {
      len_lps += 1;
      lps[i] = len_lps;
      i += 1;
    }
    // if there is a mismatch
    else {
      //if len is not zero, update len to
      //the last known prefix length
      if (len_lps != 0) {
        len_lps = lps[len_lps - 1];
      }
      // No prefix matches, set lps[i] to 0
      else {
        lps[i] = 0;
        i += 1;
      }
    }
  }
  return lps;
}
function minChar2(s) {
  let n = s.length;
  let rev = s.split("").reverse().join("");
  // Get concatenation of string, special character
  // and reverse string
  s = s + "$" + rev;
  // Get LPS array of this concatenated string
  let lps = computeLPSArray(s);
  // By subtracting last entry of lps array from string, we will get our result
  return n - lps[s.length - 1];
}

console.log(minChar2("abc"));
console.log(minChar2("aacecaaaa"));
console.log(minChar2("madam"));
