/**
 * 
Given a string s, the objective is to convert it into integer format without utilizing any built-in functions. Refer the below steps to know about atoi() function.

Cases for atoi() conversion:

Skip any leading whitespaces.
Check for a sign (‘+’ or ‘-‘), default to positive if no sign is present.
Read the integer by ignoring leading zeros until a non-digit character is encountered or end of the string is reached. If no digits are present, return 0.
If the integer is greater than 231 – 1, then return 231 – 1 and if the integer is smaller than -231, then return -231.
Examples:

Input: s = "-123"
Output: -123
Explanation: It is possible to convert -123 into an integer so we returned in the form of an integer
Input: s = "  -"
Output: 0
Explanation: No digits are present, therefore the returned answer is 0.
Input: s = " 1231231231311133"
Output: 2147483647
Explanation: The converted number will be greater than 231 – 1, therefore print 231 – 1 = 2147483647.
Input: s = "-999999999999"
Output: -2147483648
Explanation: The converted number is smaller than -231, therefore print -231 = -2147483648.
Input: s = "  -0012gfg4"
Output: -12
Explanation: Nothing is read after -12 as a non-digit character ‘g’ was encountered.
Constraints:
1 ≤ |s| ≤ 15
 */

function myAtoi(s) {
  // code here
  let index = 0;
  let sign = 1;
  let result = 0;
  let INT_MAX = 2147483647;
  let INT_MIN = -2147483648;

  // skip leading white space
  while (index < s.length && s[index] === " ") index++;

  //check for sign
  if ((index < s.length && s[index] === "+") || s[index] === "-") {
    sign = s[index] === "-" ? -1 : 1;
    index++;
  }

  // convert to integer and handle overflow
  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    const digit = s[index] - "0";
    result = result * 10 + digit;

    // check for overflow and underflow
    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }
    index++;
  }
  return result ? result * sign : 0;
}

console.log(myAtoi("-123"));
console.log(myAtoi("  -"));
console.log(myAtoi(" 1231231231311133"));
console.log(myAtoi("  -0012gfg4"));
