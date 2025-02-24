/*
Currying is a process in function programming in which we transform a function with multiple arguments into a sequence of nesting functions that take, each with a single argument, at a time.
ex: function(a,b,c) is transformed into function(a)(b)(c)
*/

function sum(a, b, c) {
    return a + b + c;
}
console.log(sum(1, 2, 3));

function curry(f) {
    return function (a) {
        return function (b) {
            return function (c) {
                return f(a, b, c);
            }
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3));

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);