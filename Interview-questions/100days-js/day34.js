//remove duplicates

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 1, 2, 3]));
console.log(removeDuplicates(["a", "b", "c", "d", "e", "e", "a", "c"]));
