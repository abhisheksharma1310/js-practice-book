/**
 * Rest operator 
 * array
 */

const arr = ["one", "two", "three", "four", "five"];

const arrValue = [a,b, ...restArr] = arr;

console.log("arrValue",arrValue);
console.log("rest: ", restArr);

/**
 * Rest operator
 * Object
 */

const detail = {
    name: "Abhishek Sharma",
    age: new Date().getFullYear() - 1998,
    city: "New Delhi"
};

const abhdetail = {name, ...abhRest} = detail;

console.log("name: ", name);
console.log("abhDetail: ", abhdetail);
console.log("abhRest: ", abhRest);
