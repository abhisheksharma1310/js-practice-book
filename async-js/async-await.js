// normal function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));

// async function
async function add1(a, b) {
    return a + b;
}
add1(2, 3).then((data) => {
    console.log(data);
});

// async await
async function greet() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    })

    let res = await promise;
    console.log(res);
}
greet();

// async await with try catch
async function greet() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("hello");
            }, 2000);
        })
        let res = await promise;
        console.log(res);
    }
    catch (err) {
        console.log(err);
    }
}
greet();

// sequential execution
function resolveHello() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    })
}

function resolveWorld() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("world");
        }, 2000);
    })
}

async function greet() {
    console.log("sequential execution")
    let hello = await resolveHello();
    let world = await resolveWorld();
    console.log(hello + " " + world);
}
greet();