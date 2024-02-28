/**
 * Move all negative numbers to beginning and positive to end with constant extra space
 */

function moveElements(arr) {
  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
}
console.log(moveElements([-12, 11, -13, -5, 6, -7, 5, -3, -6]));

function moveToLast(arr) {
  let p = [];
  let n = [];
  for(let i=0; i<arr.length; i++){
    if(arr[i] < 0){
        n.push(arr[i]);
    } else {
        p.push(arr[i]);
    }
  }
  arr.length = 0;
  arr.push(...p, ...n);
  return arr;
}
console.log(moveToLast([1, -1, 3, 2, -7, -5, 11, 6]));
