//Global function in js

let count = 0;

//set timeout
for(let i=0; i<10; i++){
    setTimeout((val)=>{
        callMe(val);
    }, i*1000, count+i);
}

function callMe(val){
    count++;
    console.log(val, " - ", count);
}

//set immediate
console.log("first");
setImmediate((val)=>{
    console.log(`Immediate ${val}`);
}, "hello");
console.log("last");

//setInterval
const t1 = setInterval(()=>{
    if(count > 5){
        clearInterval(t1);
    }
    count++;
    console.log(`T ${count}`)
}, 1000);