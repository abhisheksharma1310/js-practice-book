//Arrays in js

const yearOld = (yob) => new Date().getFullYear() - yob;

const arr1 = [
  "test",
  1,
  true,
  { name: "Abhishek Sharma", age: yearOld(1998) },
  ["dance", "sing"],
];
console.log(arr1);

const arr2 = arr1;
arr2[3].name = "Raj";
arr2[4][0] = "play";
console.log(arr2);
console.log(arr1);

// console.clear();

//array methods for delete item and insert item from end
let arr = [];
// for(let x = 0; x<5; x++){
//     arr.push(x*10); //Insert item at end
// }
// console.log(arr);
// for(let x = 0; x<5; x++){
//     console.log("Item removed from array: ",arr.pop()); //remove item from end
// }

//array methods for delete item and insert item from start
// for(let x=0; x<5; x++){
//     arr.unshift(x*5); //Insert item at start
// }
// console.log(arr);
// for(let x=0; x<5; x++){
//     console.log("Item removed from array ",arr.shift()); //remove item from start
// }

//splice method to insert item anywhere in array
// arr = [0,1,2,3,4,5];
// arr.splice(1,0,7);
// console.log(arr);
// arr.splice(1,0,8);
// console.log(arr);
// delete arr[1]; //delete element from array
// console.log(arr);

// //join array
// const jArr = arr1.join('-');
// console.log(jArr)

// //concat two array
// const ar = [2, 89, 89, 89];
// const arrC = ar.concat(arr1);
// console.log(arrC);

// //check if array include specific element
// const isInc = ar.includes(89);
// console.log(isInc);

// //check index of specific element in an array
// const indx = ar.indexOf(89);
// console.log(indx);

// //check index of specific element in an array
// const lIndx = ar.lastIndexOf(89);
// console.log(lIndx);

// //convert array into a string
// const arrStr = arr1.toString();
// console.log(arrStr);

// //convert array into json string
// const arrJson = JSON.stringify(arr1);
// console.log(arrJson);

// //convert json string into array json
// const jsonArr = JSON.parse(arrJson);
// console.log(jsonArr);

//check is json is an array
// const isJsonArr = Array.isArray(jsonArr);
// console.log(isJsonArr);

//sort the array
const arr4 = [1, 5, 2, 7, 9, 3, 0, "v", "i", "a", "z"];
console.log(arr4.sort());

//reverse the array
//console.log(arr4.reverse());

//create coppy of array using map method
// const narr4 = arr4.map(v => v);
// console.log(narr4);

//modify elements of an array without altering original array
// const marr4 = arr4.map(v => v+1);
// console.log(marr4);
