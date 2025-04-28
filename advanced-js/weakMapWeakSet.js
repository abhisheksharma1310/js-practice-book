//Weak Map and Weak Set will be garbage collected when there are no references to the object
// WeakMap and WeakSet are two data structures in JavaScript that allow you to store key-value pairs and unique values, respectively, without preventing garbage collection of the keys or values.

// They are useful for managing memory and avoiding memory leaks in your applications, especially when dealing with large data sets or complex objects.
// WeakMap and WeakSet are similar to Map and Set, but with some important differences:
// 1. WeakMap and WeakSet do not prevent their keys or values from being garbage collected. This means that if there are no other references to the keys or values, they can be automatically removed from memory, which helps to avoid memory leaks.
// 2. WeakMap and WeakSet do not have methods to iterate over their keys or values, as they are not guaranteed to be in memory. This means that you cannot use methods like forEach, map, or filter on them.

// 3. WeakMap and WeakSet can only have objects as keys, while Map and Set can have any value as a key or value. This means that you cannot use primitive values like strings or numbers as keys in a WeakMap or WeakSet.
// 4. WeakMap and WeakSet are not enumerable, meaning that you cannot use methods like Object.keys or Object.entries to get their keys or values. This means that you cannot use them in a for...in loop or a for...of loop.

//declaration of weakMap and weakSet
const weakMap = new WeakMap(); // create a new WeakMap
const weakSet = new WeakSet(); // create a new WeakSet
const obj1 = { name: "John" }; // create an object to be used as a key in the WeakMap
const obj2 = { name: "Doe" }; // create another object to be used as a key in the WeakMap
const obj3 = { name: "Jane" }; // create another object to be used as a key in the WeakSet

weakMap.set(obj1, "value1"); // set a key-value pair in the WeakMap
weakMap.set(obj2, "value2"); // set another key-value pair in the WeakMap

weakSet.add(obj3); // add a value to the WeakSet

const value1 = weakMap.get(obj1); // get the value associated with obj1 in the WeakMap
const value2 = weakMap.get(obj2); // get the value associated with obj2 in the WeakMap
const hasValue = weakSet.has(obj3); // check if obj3 is in the WeakSet

console.log(value1); // log the value associated with obj1 in the WeakMap
console.log(value2); // log the value associated with obj2 in the WeakMap
console.log(hasValue); // log whether obj3 is in the WeakSet
