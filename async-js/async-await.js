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
async function greet1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hello");
        }, 2000);
    })

    let res = await promise;
    console.log(res);
}
greet1();

// async await with try catch
async function greet2() {
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
greet2();

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

async function sequentialExecution() {
    console.log("sequential execution")
    let hello = await resolveHello();
    let world = await resolveWorld();
    console.log(hello + " " + world);
}
sequentialExecution();

// concurrent execution
async function concurrentExecution() {
    console.log("concurrent execution");
    let hello = resolveHello();
    let world = resolveWorld();
    console.log(await hello);
    console.log(await world);
}
concurrentExecution();

// paralel execution
function paralelExecution() {
    Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))(),
    ]);
}

// 
async function parallelExecution1() {
    await Promise.all([
        (async () => console.log(await resolveHello()))(),
        (async () => console.log(await resolveWorld()))(),
    ]);
    console.log("Finally");
}