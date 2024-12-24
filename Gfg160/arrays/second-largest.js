/**
 * 
Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.
Constraints:
2 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105
 */
function getSecondLargest(arr) {
  const arr1 = arr.sort((a, b) => a - b);
  const firstLargest = arr1[arr1.length - 1];
  let secondLargest = null;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < firstLargest) {
      secondLargest = arr1[i];
    }
  }
  if (secondLargest) return secondLargest;
  return -1;
}

function getSecondLargest1(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] < firstLargest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  if (firstLargest !== secondLargest && secondLargest > 0) return secondLargest;
  return -1;
}

console.log(getSecondLargest1([12, 35, 1, 10, 34, 1]));
console.log(getSecondLargest1([10, 5, 10]));
console.log(getSecondLargest1([10, 10, 10]));
