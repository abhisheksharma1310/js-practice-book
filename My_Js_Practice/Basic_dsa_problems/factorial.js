/**
 * Program for factorial of a number
 */

function factorial (num) {
    let res = 1;
    if(num <=1) return res;
    for(let i=2; i<=num; i++){
        res *= i;
    }
    return res;
}

console.log(factorial(5));

function factorialR (num) {
    if(num <=1) return 1;
    return num*factorial(num-1);
}

console.log(factorialR(5));