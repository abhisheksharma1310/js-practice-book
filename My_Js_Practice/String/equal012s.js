/**
 * Count Substrings with equal number of 0s, 1s and 2s
 */

// JS program to find substring with equal
// number of 0's, 1's and 2's

// Method to count number of substring which
// has equal 0, 1 and 2
function getSubstringWithEqual012(s) {
  let arr = [];
  let n = s.length;

  //generating subarrays
  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      var s1 = "";
      for (var k = i; k <= j; k++) {
        s1 += s[k];
      }
      arr.push(s1);
    }
  }
  var count = 0;
  var countZero, countOnes, countTwo;
  // iterating over array of all substrings
  for (var i = 0; i < arr.length; i++) {
    countZero = 0;
    countOnes = 0;
    countTwo = 0;
    var curs = arr[i];
    for (var j = 0; j < curs.length; j++) {
      if (curs[j] == "0") countZero++;
      if (curs[j] == "1") countOnes++;
      if (curs[j] == "2") countTwo++;
    }
    // if number of ones,two and zero are equal in a substring
    if (countZero == countOnes && countOnes == countTwo) {
      count++;
    }
  }

  return count;
}
// Driver's code
let str = "0102010";

// Function call
console.log(getSubstringWithEqual012(str));

// This code is contributed by phasing17
