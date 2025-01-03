/**
 Given a string s consisting of lowercase Latin Letters. Return the first non-repeating character in s. If there is no non-repeating character, return '$'.
Note: When you return '$' driver code will output -1.

Examples:

Input: s = "geeksforgeeks"
Output: 'f'
Explanation: In the given string, 'f' is the first character in the string which does not repeat.
Input: s = "racecar"
Output: 'e'
Explanation: In the given string, 'e' is the only character in the string which does not repeat.
Input: s = "aabbccc"
Output: -1
Explanation: All the characters in the given string are repeating.
Constraints:
1 <= s.size() <= 105
 */
// Function to find the first non-repeating character in a string.
function nonRepeatingChar(s) {
  // code here
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = obj[s[i]] ? obj[s[i]] + 1 : 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) return key;
  }
  return "$";
}

console.log(nonRepeatingChar("geeksforgeeks"));
console.log(nonRepeatingChar("racecar"));
