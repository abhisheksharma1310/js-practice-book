//Find Median

//tips:
//Sort the array in ascending order
//If the array has an odd number of elements, the median is the middle elements.
//If the array has an even number of elements, the median is the average of the two middle elements.

function findMedian(arr) {
  //sort elements
  arr = arr.sort((a, b) => a - b);
  //find middle element
  const len = arr.length;
  const middle = Math.floor(len / 2);
  //even elements
  if (len % 2 == 0) {
    const avg = arr[middle - 1] + arr[middle];
    return avg / 2;
  } else {
    return arr[middle];
  }
}

console.log(findMedian([3, 3, 5, 9, 15])); //5
console.log(findMedian([3, 5, 7, 9])); // (5+7)/2 =6
console.log(findMedian([3, 3, 5, 9, 15, 18])); //(5+9)/2 = 7
