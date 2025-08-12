//convert object into an array

function objToArr(obj) {
  return Object.entries(obj);
}

//convert array to obj
function arrToobj(arr) {
  return Object.fromEntries(arr);
}

console.log(objToArr({ name: "abhishek", age: 26 }).flat());
console.log(arrToobj(objToArr({ name: "abhishek", age: 26 })));
