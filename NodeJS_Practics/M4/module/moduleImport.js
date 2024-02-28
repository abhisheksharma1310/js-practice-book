//const {testFunction, person} = require('./test1');
const output1 = require('./test2');
const output2 = require('./test3');
const person = require('./test4');


const person1 = new person('Abhishek', 'Sharma');
const person2 = new person('Rohit', 'Singh');
const person3 = new person('Raj', 'Sharma');

console.log(`
    ${person1.fullName()},
    ${person2.fullName()},
    ${person3.fullName()}
`);

console.log(output1('Hello'));
console.log(output2);
console.log(output2.output('Test'));

// testFunction();

// console.table(person);