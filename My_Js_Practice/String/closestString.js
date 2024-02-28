/**
 * Find the minimum distance between the given two words
 */

function ClosestString(arr, w1, w2) {
  let d1 = -1,
    d2 = -1;
  let ans = Number.MAX_VALUE;
  //traverse the array of string
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === w1) d1 = i;
    if (arr[i] === w2) d2 = i;
    if (d1 !== -1 && d2 !== -1) ans = Math.min(ans, Math.abs(d1 - d2));
  }
  return ans;
}

let S = ["the", "quick", "brown", "fox", "quick"];

let word1 = "the",
  word2 = "fox";

console.log(ClosestString(S, word1, word2));
