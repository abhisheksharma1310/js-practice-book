const pat = "ebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabadd";
const txt =
  "ebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddaeebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddbabebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddbcbebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddeebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddabebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddbadebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddeebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddbebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddecebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddeebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddbebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabaddebbabdbacccadeaaeecadedbbaedbedeaccccdbaeecbcbdbacabadd";

function search(pat, txt) {
  // your code here
  const res = [];
  for (let i = 0; i <= txt.length - pat.length; i++) {
    let j;
    for (j = 0; j < pat.length; j++) {
      if (txt[i + j] !== pat[j]) break;
    }
    if (j === pat.length) res.push(i);
  }
  return res;
}

// Testing the function
const pat1 = "aaba";
const txt1 = "aabaacaadaabaaba";

console.log(search(pat, txt)); // Output: [0, 9, 12]
console.log(search("geek", "geeksforgeeks"));

function searchKMP(pat, txt) {
  const res = [];
  const patLen = pat.length;
  const txtLen = txt.length;

  // Create LPS (longest prefix suffix) array
  const lps = new Array(patLen).fill(0);
  let j = 0; // index for pat

  computeLPSArray(pat, patLen, lps);

  let i = 0; // index for txt
  while (i < txtLen) {
    if (pat[j] === txt[i]) {
      j++;
      i++;
    }
    if (j === patLen) {
      res.push(i - j);
      j = lps[j - 1];
    } else if (i < txtLen && pat[j] !== txt[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
  return res;
}

function computeLPSArray(pat, patLen, lps) {
  let length = 0;
  let i = 1;
  lps[0] = 0;

  while (i < patLen) {
    if (pat[i] === pat[length]) {
      length++;
      lps[i] = length;
      i++;
    } else {
      if (length !== 0) {
        length = lps[length - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
}

// Testing the function
const pat2 = "aaba";
const txt2 = "aabaacaadaabaaba";

console.log(searchKMP(pat2, txt1)); // Output: [0, 9, 12]
