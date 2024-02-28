/* 
  An object is an unordered collection of key-value pairs.
  The key must either be a string or symbol data type whereas the value can be of any data type.
  To retrive a value, you can use the corresponding key. This can be achieved using the dot notation or bracket notation.
  An object is not an iterable.
*/

/* 
    Object Big O time compleexity.
    insert/remove/access - O(1).
    search/iterate - O(n).
    Object.keys() - O(n).
    Object.values() - O(n).
    Object.entries() - O(n).
*/

// Create an object
const obj = {
  name: "Abhishek",
  age: 25,
  sayMyName: function () {
    return this.name;
  },
};

//access object values
console.log(obj.name, obj["age"]);

//call object method
obj.sayMyName();

//insert new properties into object
obj.hobby = "Football";

//delete object properties
delete obj.hobby;

//iterate object items using for in loop
for (const key in obj) {
  console.log(key, " : ", obj[key]);
}

//Find all object keys using Object.keys method
console.log("Object keys: ", Object.keys(obj));

//Find all object values using Object.values method
console.log("Object values: ", Object.values(obj));

//Find all keys and values of object using Object.entries method
console.log("Object entries: ", Object.entries(obj));

//Check key exist or not in an object
console.log(obj.hasOwnProperty("name"));
