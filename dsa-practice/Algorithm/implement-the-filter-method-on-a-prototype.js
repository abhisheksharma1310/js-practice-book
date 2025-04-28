Array.prototype.myFilter = function (callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  // Only change code above this line
  return newArray;
};

const s = [23, 65, 98, 5];
const new_s = s.myFilter(function (item, index, array) {
  // item is the current element being processed in the array
  // index is the index of the current element being processed in the array
  // array is the array filter was called upon
  // Return true to keep the element, false otherwise
  console.log(item, index, array);
  return item % 2 === 1;
});
console.log(new_s); // [ 23, 5 ]
