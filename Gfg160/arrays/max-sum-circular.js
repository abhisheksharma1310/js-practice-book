/**
 * 
 Max Circular Subarray Sum
Difficulty: HardAccuracy: 29.37%Submissions: 142K+Points: 8
Given an array of integers arr[] in a circular fashion. Find the maximum subarray sum that we can get if we assume the array to be circular.

Examples:

Input: arr[] = [8, -8, 9, -9, 10, -11, 12]
Output: 22
Explanation: Starting from the last element of the array, i.e, 12, and moving in a circular fashion, we have max subarray as 12, 8, -8, 9, -9, 10, which gives maximum sum as 22.
Input: arr[] = [10, -3, -4, 7, 6, 5, -4, -1]
Output: 23
Explanation: Maximum sum of the circular subarray is 23. The subarray is [7, 6, 5, -4, -1, 10].
Input: arr[] = [-1, 40, -14, 7, 6, 5, -4, -1] 
Output: 52
Explanation: Circular Subarray [7, 6, 5, -4, -1, -1, 40] has the maximum sum, which is 52.
Constraints:
1 <= arr.size() <= 105
-104 <= arr[i] <= 104
 */

function circularMaxSum(arr) {
  let totalSum = 0;
  let currMaxSum = 0;
  let currMinSum = 0;
  let maxSum = arr[0];
  let minSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
    maxSum = Math.max(maxSum, currMaxSum);

    currMinSum = Math.min(currMinSum + arr[i], arr[i]);
    minSum = Math.min(minSum, currMinSum);

    totalSum += arr[i];
  }
  let normalSum = maxSum;
  let circularSum = totalSum - minSum;

  if (minSum === totalSum) {
    return normalSum;
  }

  return Math.max(normalSum, circularSum);
}

console.log(circularMaxSum([8, -8, 9, -9, 10, -11, 12]));
