/**
 * Async function using then and catch
 */

const myPromise = (num) => {
    return new Promise((resolve, reject) => {
        if(num > 5){
            resolve("resolved");
        } else {
            reject("rejected");
        }
    });
};

// myPromise(6).then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// });

/**
 * Async function using async, await, try and catch
 */

async function executeMypromise(){
    try {
        const value = await myPromise(6);
        console.log("ex: ",value);
    } catch (error) {
        console.log(error);
    }
};

executeMypromise();