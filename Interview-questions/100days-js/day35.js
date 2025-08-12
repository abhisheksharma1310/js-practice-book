//check a object is empty or not

function isEmptyObject(obj) {
  return Object.keys(obj).length === 0;
}

const obj = {};
const obj1 = {
  name: "abhishek",
  age: 26,
};

console.log(isEmptyObject(obj));
console.log(isEmptyObject(obj1));
