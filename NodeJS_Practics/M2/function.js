//function declaration
function addNum(a,b){
    return a+b;
}
//call function
let r = addNum(4,6);
console.log("sum is: ",r);

//function expression
const f1 = function(a,b){
    return a*b;
}
//call function expression
let r1 = f1(4,6);
console.log("multiply: ",r1);

//arrow function
const f2 = (a,b) => {
    return a/b;
}
console.log("div: ", f2(8,2));

//arrow function in short
const f3 = (a,b) => a%b;
console.log("modulus: ", f3(10,4));

//arrow function in short
const f4 = a => a*a;
console.log("square: ", f4(4));

//IIFE
let ss = 5;
((s)=>{
    console.log("IIFE ", s*s);
}) (ss);

//recursion function
function rf1(num){
    if(num>0){
        console.log(num);
        num--;
        return rf1(num);
    }
    return "end";
}
console.log("R: ",rf1(10));

//closer function
const cf1 = val1 => {
    return (val2) => {
        console.log(val1, val2);
        return val1+val2;
    }
}
const cf2 = cf1(5);
console.log(cf2(4));


