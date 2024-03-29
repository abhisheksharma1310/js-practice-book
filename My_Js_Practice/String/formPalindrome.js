/**
 * Minimum insertions to form a palindrome
 */

// A Naive recursive JavaScript program to find minimum
// number insertions needed to make a string
// palindrome
// Recursive function to find minimum number
// of insertions
function findMinInsertions(str, l, h) {
  // Base Cases
  if (l > h) return Number.MAX_VALUE;
  if (l == h) return 0;
  if (l == h - 1) return str[l] == str[h] ? 0 : 1;
  // Check if the first and last characters
  // are same. On the basis of the comparison
  // result, decide which subproblem(s) to call
  return str[l] == str[h]
    ? findMinInsertions(str, l + 1, h - 1)
    : Math.min(
        findMinInsertions(str, l, h - 1),
        findMinInsertions(str, l + 1, h)
      ) + 1;
}
// Driver program to test above functions
let str = "geeks";
console.log(findMinInsertions(str, 0, str.length - 1));
