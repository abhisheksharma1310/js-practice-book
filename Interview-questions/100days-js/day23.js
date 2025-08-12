//count occurances of element

function countOccurances(arr) {
  const obj = {};
  for (el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }
  return obj;
}

console.log(countOccurances([1, 2, 2, 3, 1, 4, 2]));
