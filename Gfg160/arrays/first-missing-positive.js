/**
 * 
 You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

Note: Positive number starts from 1. The array can have negative integers too.

Examples:

Input: arr[] = [2, -3, 4, 1, 1, 7]
Output: 3
Explanation: Smallest positive missing number is 3.
Input: arr[] = [5, 3, 2, 5, 1]
Output: 4
Explanation: Smallest positive missing number is 4.
Input: arr[] = [-8, 0, -1, -4, -3]
Output: 1
Explanation: Smallest positive missing number is 1.
Constraints:  
1 <= arr.size() <= 105
-106 <= arr[i] <= 106
 */

function missingNumber(arr) {
  arr = arr.sort((a, b) => a - b);
  let res = 1;
  for (let i = 0; i < arr.length; i++) {
    if (res === arr[i]) {
      res++;
    } else if (arr[i] > res) {
      break;
    }
  }
  return res;
}

function missingNumber1(arr) {
  const n = arr.length;
  const vis = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0 && arr[i] <= n) vis[arr[i] - 1] = true;
  }
  for (let j = 1; j < n + 1; j++) {
    if (!vis[j - 1]) return j;
  }
  return n + 1;
}

function missingNumber2(arr) {
  n = arr.length;
  for (let i = 0; i < n; i++) {
    while (arr[i] >= 1 && arr[i] <= n && arr[i] !== arr[arr[i] - 1]) {
      let temp = arr[i];
      arr[i] = arr[arr[i] - 1];
      arr[temp - 1] = temp;
    }
  }
  for (let i = 1; i < n + 1; i++) {
    if (i !== arr[i - 1]) return i;
  }
  return n + 1;
}

console.log(missingNumber([2, -3, 1, 4, 5]));
console.log(missingNumber1([2, -3, 1, 4, 5]));
console.log(missingNumber2([2, -3, 1, 4, 5]));
