/**

 * You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.
Examples:

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.
Input: arr[] = [10, 20, 30]
Output: [10, 20, 30]
Explanation: No change in array as there are no 0s.
Input: arr[] = [0, 0]
Output: [0, 0]
Explanation: No change in array as there are all 0s.
Constraints:
1 ≤ arr.size() ≤ 105
0 ≤ arr[i] ≤ 105
 */

function pushZerosToEnd(arr) {
  // code here
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[index++] = arr[i];
    }
  }
  while (index < arr.length) {
    arr[index++] = 0;
  }
  return arr;
}

function pushZerosToEnd1(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      const temp = arr[count];
      arr[count] = arr[i];
      arr[i] = temp;
      count++;
    }
  }
  return arr;
}

console.log(pushZerosToEnd1([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(pushZerosToEnd1([10, 20, 30]));
console.log(pushZerosToEnd1([0, 0]));
