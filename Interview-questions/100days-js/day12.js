// Write a function that takes a an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

function removeDuplicate(arr) {
  const set = new Set();
  for (el of arr) {
    if (!set.has(el)) {
      set.add(el);
    }
  }
  return [...set];
}

function removeDuplicate1(arr) {
  return [...new Set([...arr])];
}

console.log(removeDuplicate([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicate1([1, 2, 3, 2, 1, 4]));
