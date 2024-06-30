function countTruthy(array) {
  let count = 0;
  for (let element of array) {
    //if (element) also work same
    if (!!element) count++;
  }
  return count;
}

console.log(countTruthy(["", null, NaN, undefined, 0, false, true, 1, "a"]));
