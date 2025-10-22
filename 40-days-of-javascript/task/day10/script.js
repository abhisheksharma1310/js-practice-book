/**
 * 1. What will be the output of the following code and why?
 */
let user = "Alice";

function outer() {
  function inner() {
    console.log(user);
  }
  let user = "Bob";
  inner();
}

outer();

// Bob //user var reasigned with value Bob and then inner function called

/**
 * 2. What is the mistake in the code below?
 */
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);
//not any mistake

/**
 * 3. Create a function with a nested function and log a variable from the parent function.
 */
function parent() {
  let x = "Abhishek";
  function children() {
    console.log("from children function");
  }
  children();
  console.log(x);
}
parent();

/**
 * 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
 */
function loop() {
  for (let i = 0; i <= 5; i++) {
    var a = i;
  }
  console.log(a); //acessible
  for (let i = 0; i <= 5; i++) {
    let b = i;
  }
  //console.log(b); //not acessible
}
loop();

/**
 * 5. Write a function that tries to access a variable declared inside another function.
 */
function firstFunc() {
  function secondFun() {
    let x = 2;
  }
  secondFun();
  //console.log(x); //not acessible
}
firstFunc();

/**
 * 6. What will be the output and why?
 */
//console.log(a);
let a = 10;
//reference error due to tdz

/**
 * 7. Where is the age variable accessible?
 */
function showAge() {
  let age = 25;
  console.log(age);
}

//console.log(age);
//only inside showAge

/**
 * 8. What will be the output and explain the output?
 */
let message = "Hello";

function outer() {
  let message = "Hi";
  function inner() {
    console.log(message);
  }
  inner(); //Hi it first found in outer function scope
}
outer();

/**
 * 9. What will be the output and why?
 */
let x = "Global";

function outer() {
  let x = "Outer";
  function inner() {
    let x = "Inner";
    console.log(x);
  }
  inner(); //Inner it first found in inner scope
}
outer();

/**
 * 10. What will be the output and why?
 */
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2
