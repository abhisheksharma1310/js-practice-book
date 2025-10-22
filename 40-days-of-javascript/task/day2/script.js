//✅ Task 1: Declare variables for a person’s name, age, isStudent status, and favorite programming language.

var name = "Abhishek";
var age = 26;
var isStudent = "No";
var status;
var favoriteProgrammingLanguage = "JavaScript";

//✅ Task 2: Print the values to the console.

console.log(name, age, isStudent, status, favoriteProgrammingLanguage);

//✅ Task 3: Try reassigning values to let and const variables and observe errors.
let name1 = "Abhishek";
const age1 = 26;
let isStudent1 = "No";
let status1;
let favoriteProgrammingLanguage1 = "JavaScript";

//let name1 = "raj"; //error can not redeclare variable declared with let;
//const age1 = 22; //error can not redeclare variable declared with let
//age1 = 20; //cannot reassign varible declared with const
//Uncaught TypeError: Assignment to constant variable.

console.log(name, age, isStudent, status, favoriteProgrammingLanguage);

//✅ Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.

let obj = {
  name: "Abhishek Sharma",
  age: 26,
};

let obj1 = obj;
obj1.name = "Raj";

let arr = ["abhishek", 26];
let arr1 = arr;
arr1[1] = 20;

console.log(obj, obj1, arr, arr1);
