 
 const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise resolved");
        resolve(1);
    }, 2000);
}); 

promise.then((data) => {
    console.log(data);
    return 2;
})
.then((data) => {
    console.log(data);
    return 3;
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Promise is resolved or rejected");
}) 

// Promise Static methods
// Promise.all()
// if any one promise reject then all promise will reject
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("All Promise is resolved or rejected");
});

// Promise.allSettled()
// wait for all inputs promise to complete regardless of weather or not one of them is rejected
const promise7 = Promise.resolve(7);
const promise8 = Promise.resolve(8);
const promise9 = Promise.reject(9);

Promise.allSettled([promise7, promise8, promise9]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("Promise is all settled");
});

// Promise.race()
// if any one promise resolove or reject it will return that promise
const promise4 = Promise.resolve(4);
const promise5 = Promise.resolve(5);
const promise6 = Promise.resolve(6);

Promise.race([promise4, promise5, promise6]).then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    console.log("Promise is resolved or rejected using race");
});

