// In Javascript, when we return a function from another function, we are effectively returning a combination the definition along with the function's scope. This would let the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope would allow the function to remember its state even after the function has finished executing. And this is known as Closure.

function outer() {
    let counter = 0;
    function inner() {
        counter++;
        console.log(counter);
    }
    return inner;
}
let fn = outer();
fn();
fn();