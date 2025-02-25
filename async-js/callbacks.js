// callback function

function greet(greeting) {
    console.log(`${greeting}, Abhishek`);
}

function greetAbhishek(greet) {
    greet("Hello");
}

function greetAbhishek(callback) {
    callback("Hello");
}

greetAbhishek(greet);

// asynchronous function
setTimeout((abc) => {
    greet(abc);
}, 2000, "hello");