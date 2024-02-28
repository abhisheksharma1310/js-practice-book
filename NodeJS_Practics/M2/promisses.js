//promisses in js

const p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Promise fail");
    }, 1000);
    setTimeout(()=>{
        resolve("Promise success");
    }, 500);
});

p1.then(
    (val)=>{
        console.log(`true: ${val}`);
    },
    (err)=>{
        console.log(`false: ${err}`);
    }
);

p1.then((val)=>{
    console.log(val);
}).catch((err) => {
    console.log(err);
});