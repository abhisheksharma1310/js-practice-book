//find min value in an array

function mniArr(arr) {
  let min = arr[0];
  for (el of arr) {
    if (el < min) min = el;
  }
  return min;
  return Math.min(...arr);
}

function secMin(arr) {
  let min = arr[0];
  let secMin = arr[1];
  for (el of arr) {
    if (el < min) {
      secMin = min;
      min = el;
    }
  }
  return secMin;
}

console.log(mniArr([3, 2, 4, 1, 4, 0, 9]));
console.log(secMin([3, 2, 4, 1, 4, 0, 9]));
