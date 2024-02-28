/*
  Array data structure in JavaScript
  An array is a data structure that can hold a collection of values.
  Array can contain a mix of different data types.
  You can store strings, booleans, numbers or even objects all in the same array.
  Arrays are resizable. You dont have to declare the size of an array before creating it.
  JavaScript arrays are zero-indexed and the insertion order is maintained.
  Arrays are iterables. They can be used with a for of loop.
*/

/* 
  Array Big O time complexity
  insert/remove from end O(1)
  insert/remove from begining O(n)
  Access array element O(1)
  Search array element O(n)
  push/pop O(1)
  shift/unshift/concat/slice/splice O(n)
  forEach/map/filter/reduce O(n)
*/

//Array declaration and initialization
const arr = [1, 2, 3, "Abhishek"];
console.log("Array: ", arr);

//Iterate over array items using for of loop
for (const item of arr) {
  console.log(`Array item: ${item}`);
}

//Insert item at last in an array
arr.push(4);
console.log("New item pushed: ", arr);

//Remove last item of an array and print it
const removedLastItem = arr.pop();
console.log("Last item removed", removedLastItem);

//Remove item from begining and print it
const removedFirstItem = arr.shift();
console.log("First item removed", removedFirstItem);

//Insert item at begining
arr.unshift(0);
console.log("New item [0] inserted at begining: ", arr);

//Create a sub array from an array
const subArr = arr.slice(0, 3);
console.log("Sub array formed from index 0 to 2: ", subArr);

//Insert items at desired index of an array and also remove some element
arr.splice(1, 1, 7, 6);
console.log("Insert items [7,6] at index 1 and remove 1 item: ", arr);

//Concatenate two array
const arr1 = [56, 34, true];
const concatedArr = arr.concat(arr1);
console.log("Concateneted array: ", concatedArr);

//Transform array using map method
const tArr = arr.map((el) => el * 2);
console.log("Maped array: ", tArr);

//Filter item from the array
const fArr = arr.filter((el) => typeof el === "number");
console.log("Filtered Array: ", fArr);

//Reduced the array
const rArr = arr.reduce((acc, cur) => acc += cur);
console.log("Reduced Array: ", rArr);

//Iterate array item with forEach method
arr.forEach((el, ind) => console.log(ind, " : ", el));

//Iterate items with for loop
for(let i = 0; i<arr.length; i++) {
    console.log(`${i} : ${arr[i]}`);
}

