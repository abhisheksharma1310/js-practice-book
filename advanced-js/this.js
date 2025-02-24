/**
 * The JavaScript this keyword which is used in a function, refers to the object it belongs to.
 * It makes functions reusable by letting you decide the object value.
 * 
 * The this keyword is not the same as the this keyword in HTML.
 */

// Implicit binding
const person = {
    name: "Abhishek Sharma",
    greet: function() {
        console.log(this.name);
    }
}
person.greet();

// Explicit binding
function sayMyName() {
    console.log(`My name is ${this.name}`);
}
sayMyName.call(person);

// New binding
function Person(name) {
    this.name = name;
}
const p1 = new Person("Abhishek Kumar");
console.log(p1);

// Default binding
globalThis.name = "Global Name"
sayMyName();

// order of precedence
// 1. New binding
// 2. Explicit binding
// 3. Implicit binding
// 4. Default binding
