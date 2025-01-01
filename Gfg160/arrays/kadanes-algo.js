/**
 *Given an integer array arr[]. You need to find the maximum sum of a subarray.

Examples:

Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
Input: arr[] = [-2, -4]
Output: -2
Explanation: The subarray {-2} has the largest sum -2.
Input: arr[] = [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.
Constraints:
1 ≤ arr.size() ≤ 105
-109 ≤ arr[i] ≤ 104
 */

// Function to find the sum of contiguous subarray with maximum sum.
function maxSubarraySum(arr) {
  // code here
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
    }
    res = Math.max(res, sum);
  }
  return res;
}

function kadanesAlgo(arr) {
  let max = arr[0];
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(max + arr[i], arr[i]);
    res = Math.max(res, max);
  }
  return res;
}

console.log(maxSubarraySum([1, 2, 3, -2, 5]));
console.log(maxSubarraySum([2, 3, -8, 7, -1, 2, 3]));
console.log(kadanesAlgo([1, 2, 3, -2, 5]));
console.log(kadanesAlgo([2, 3, -8, 7, -1, 2, 3]));
