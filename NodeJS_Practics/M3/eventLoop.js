//Event loop first check stack and if all task of stack is completed or it empty then it scheck for que and then execute task 
console.log("first1");

setTimeout(()=>{
    console.log("async1");
}, 1000);

setTimeout(()=>{
    console.log("async0");
}, 0);

(()=>{
    console.log("IIFE");
})();

function adder(a,b){
    console.log("adder");
    return a+b;
};

function dubller(a,b){
    console.log("dubller");
    return adder(a,b) * 2;
};

function output(a,b){
    console.log("output");
    return dubller(a,b);
};

console.log(output(3,7));

console.log("first");

