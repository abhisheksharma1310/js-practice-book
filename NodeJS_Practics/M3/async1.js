//async and sync function in js

const arr = [1,2,3,4,5,6];

arr.forEach((e) =>{
    console.log("sync ",e);
});

async function asf(val,callback){
    val.forEach((e)=>{
        setTimeout((callback),  e*1000, e);
    });
};

asf(arr,(a)=>{
    console.log('async ',a);
});