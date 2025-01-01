/**
 * 
 Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

Note: It is guaranteed that the output fits in a 32-bit integer.

Examples

Input: arr[] = [-2, 6, -3, -10, 0, 2]
Output: 180
Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.
Input: arr[] = [-1, -3, -10, 0, 6]
Output: 30
Explanation: The subarray with maximum product is {-3, -10} with product = (-3) * (-10) = 30.
Input: arr[] = [2, 3, 4] 
Output: 24 
Explanation: For an array with all positive elements, the result is product of all elements. 
Constraints:
1 ≤ arr.size() ≤ 106
-10  ≤  arr[i]  ≤  10
 */

// function maxProductSubarray(arr) {
//   let min = arr[0];
//   let max = arr[0];
//   let maxProduct = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     temp = Math.max(max, arr[i] * max, arr[i] * min);
//     min = Math.min(min, arr[i] * max, arr[i] * min);
//     max = temp;
//     maxProduct = Math.max(maxProduct, max);
//   }
//   return maxProduct;
// }

function maxProduct1(arr) {
  let n = arr.length;
  let leftToRight = 1;
  let rightToLeft = 1;
  let maxProduct = -Infinity;
  for (let i = 0; i < n; i++) {
    if (leftToRight === 0) leftToRight = 1;
    if (rightToLeft === 0) rightToLeft = 1;

    leftToRight *= arr[i];
    rightToLeft *= arr[n - 1 - i];

    maxProduct = Math.max(leftToRight, rightToLeft, maxProduct);
  }
  return maxProduct;
}

console.log(maxProductSubarray([-2, 6, -3, -10, 0, 2]));
console.log(maxProduct1([-2, 6, -3, -10, 0, 2]));
