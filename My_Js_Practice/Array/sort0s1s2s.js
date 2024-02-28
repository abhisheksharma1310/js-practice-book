/**
 * Sort an array of 0s, 1s and 2s | Dutch National Flag problem
 */

function sort0s(arr) {
  return arr.sort((a, b) => a - b);
}
//console.log(sort0s([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

function sortOsBs(arr) {
  let swapped = true;
  while (swapped) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      } else {
        swapped = false;
      }
    }
  }
  return arr;
}
//console.log(sortOsBs([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

/**
 * Bubble Sort
 */
//Time complexity: O(n^2) quadratic
function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      } else {
        swapped = false;
      }
    }
  }
  return arr;
}

//console.log(bubbleSort([-6, 20, 8, -2, 4]));
//console.log(bubbleSort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

function bubbleSort1(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    // Flag to optimize the algorithm - if no swaps occur in a pass, the array is already sorted.
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped in the inner loop, the array is sorted.
    if (!swapped) {
      break;
    }
  }
  return arr;
}

// Example usage:
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
//console.log("Sorted array:", bubbleSort1(unsortedArray));
//console.log(bubbleSort1([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

// Javascript program to sort an array of 0, 1 and 2

// Sort the input array, the array is assumed to
// have values in {0, 1, 2}
function sort012(a) {
  let lo = 0;
  let hi = a.length - 1;
  let mid = 0;
  let temp = 0;
  // Iterate till all the elements
  // are sorted
  while (mid <= hi) {
    // If the element is 0
    if (a[mid] == 0) {
      temp = a[lo];
      a[lo] = a[mid];
      a[mid] = temp;
      lo++;
      mid++;
    }
    // If the element is 1
    else if (a[mid] == 1) {
      mid++;
    }
    // If the element is 2
    else {
      temp = a[mid];
      a[mid] = a[hi];
      a[hi] = temp;
      hi--;
    }
  }
  return a;
}

//console.log(sort012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));

function sort012m(arr) {
  const z = [];
  const o = [];
  const t = [];
  for (let i = 0; i <arr.length; i++) {
    if (arr[i] == 0) z.push(0);
    if (arr[i] == 1) o.push(1);
    if (arr[i] == 2) t.push(2);
  }
  return [...z, ...o, ...t];
}
console.log(sort012m([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
console.log(sort012m([0, 2, 1, 2, 0]));

