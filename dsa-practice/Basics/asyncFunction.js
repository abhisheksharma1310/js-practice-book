/**
 * async function
 */

const myPromise = new Promise((resolve, reject) => {
    //resolve("yes");
    setTimeout(() => {
        reject("resolve");
    }, 5000);
});

myPromise.then((value) => {
    if (value === "yes") {
        console.log("v: ", value);
        return 1
    } else {
        return 0
    }
}).then((value) => {
    if (value === 1) {
        console.log("🏆");
    } else {
        console.log("😊");
    }
}).catch((value) => {
    console.log("😒 ", value);
})

