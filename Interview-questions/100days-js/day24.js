//Find mode (the number which appears most frequently)

function findMode(arr) {
  const counts = {};
  let max = 0;
  let mode;
  for (let el of arr) {
    counts[el] = (counts[el] || 0) + 1;
    if (counts[el] > max) {
      max = counts[el];
      mode = el;
    }
  }
  return mode;
}

console.log(findMode([1, 2, 2, 3, 1, 4, 2])); //2
