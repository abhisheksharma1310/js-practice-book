//promise in js

let ready = true;

const promise = new Promise((resolve, reject)=>{
    console.log("ready: ", ready);
    if(ready){
        resolve("promise resolved");
    } else if(!ready){
        reject("promise rejected");
    }
});

const checkPromise = ()=>{
    promise.then(
        (val)=>{
            console.log("Pass: ", val);
        },
        (error)=>{
            console.log("Fail: ", error);
        }
    );
};

checkPromise();

setTimeout(()=>{
    checkPromise();
}, 5000);
