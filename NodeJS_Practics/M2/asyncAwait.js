//async function in js

async function asf(val){
    console.log(val);
    const p = new Promise((resolve, reject)=>{
        setTimeout(() => resolve("Success!"), 2000);
        //reject("Fail");
    });
    const p1 = await(p);
    return `val ${p1}`;
}

asf('Hello').then(
    (val)=>{
        console.log('True: ',val);
    },
    (error)=>{
        console.log('False: ', error);
    }
);

for(let i = 0; i<10; i++){
    console.log(i);
}