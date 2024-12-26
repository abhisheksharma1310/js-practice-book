/**
 * 
 * Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

Note: Consider the array as circular.

Examples :

Input: arr[] = [1, 2, 3, 4, 5], d = 2
Output: [3, 4, 5, 1, 2]
Explanation: when rotated by 2 elements, it becomes 3 4 5 1 2.
Input: arr[] = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], d = 3
Output: [8, 10, 12, 14, 16, 18, 20, 2, 4, 6]
Explanation: when rotated by 3 elements, it becomes 8 10 12 14 16 18 20 2 4 6.
Input: arr[] = [7, 3, 9, 1], d = 9
Output: [3, 9, 1, 7]
Explanation: when we rotate 9 times, we'll get 3 9 1 7 as resultant array.
Constraints:
1 <= arr.size(), d <= 105
0 <= arr[i] <= 105
 */

// Function to rotate an array by d elements in counter-clockwise direction.
function rotateArr(arr, d) {
  // code here
  const newArr = [];
  let count = 0;
  for (let i = d; i < arr.length; i++) {
    newArr[count++] = arr[i];
  }
  for (let i = 0; i < d; i++) {
    newArr[count++] = arr[i];
  }
  return newArr;
}

function reverse(arr, start, end) {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function rotateArr1(arr, d) {
  d = d % arr.length;

  reverse(arr, 0, d - 1); // 1,2 -> 2,1
  reverse(arr, d, arr.length - 1); // 3,4,5 -> 5,4,3
  reverse(arr, 0, arr.length - 1); // 2,1,5,4,3 -> 3,4,5,1,2

  return arr;
}

console.log(rotateArr([1, 2, 3, 4, 5], 2));
console.log(rotateArr1([1, 2, 3, 4, 5], 2));
