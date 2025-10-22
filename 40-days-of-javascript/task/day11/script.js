/**
 * 1. What will be the output of the following code and why?
 */
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counterFunc = outer();
counterFunc(); //1 due to count variable is acessible in closure scope
counterFunc(); //2 due to count variable is acessible in closure scope

/**
 * 2. What will be the output and why?
 */
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()()); //100 due to x variable is acessible in closure scope

/**
 * 3. Create a button dynamically and attach a click event handler using a closure. The handler should count and log how many times the button was clicked.
 */
function clickCountButton() {
  let count = 0;
  const buttonEl = document.createElement("button");
  buttonEl.textContent = "Click me!";
  buttonEl.style.padding = "10px 20px";
  buttonEl.style.fontSize = "16px";
  buttonEl.style.cursor = "pointer";
  buttonEl.style.margin = "10px";

  document.body.appendChild(buttonEl);

  buttonEl.addEventListener("click", () => {
    count++;
    console.log(`Button clicked: ${count} time${count > 1 ? "s" : ""}`);
  });
}

clickCountButton();

/**
 * 4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
 */
function createMultiplier() {
  return function (num1, num2) {
    console.log(num1 * num2);
  };
}
const multiply = createMultiplier();
multiply(2, 5);

/**
 * 5. What happens if a closure references an object?
The object is garbage collected immediately
The object remains in memory as long as the closure exists
The object is automatically cloned
None of the Above.
 */
function closure() {
  const obj = {
    name: "abhishek",
    age: 25,
  };
  return function () {
    console.log(obj.name, obj.age++);
  };
}
const objClosure = closure();
objClosure();
objClosure();
objClosure();
// The object remains in memory as long as the closure exists

/**
 * 6. Write a function factory of counter to increment, decrement, and reset a counter. Use closure to refer the count value across the functuions.
 */
function createCounter() {
  let count = 0;
  return {
    count: () => console.log(count),
    increment: () => {
      console.log(++count);
    },
    decrement: () => {
      console.log(--count);
    },
    reset: () => {
      count = 0;
      console.log(count);
    },
  };
}
const counter = createCounter();
counter.count();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();
