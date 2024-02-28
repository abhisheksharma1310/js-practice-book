/**
 * Minimum number of times A has to be repeated such that B is a substring of it
 */

function MinimumSubString(str1, str2) {
  let a = str1;
  let b = [...new Set(str2)];
  if (str1.length !== b.length) return -1;
  let find = true;
  let count = 1;
  while (find) {
    if (a.includes(str2)) {
      return count;
    } else {
      a += a;
      count++;
    }
  }
}
console.log(MinimumSubString("abcd", "cdabcdab"));
console.log(MinimumSubString("ab", "cab"));

