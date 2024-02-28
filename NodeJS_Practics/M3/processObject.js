//process object of js

//take user input

const rLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rLine.question(`What is your name? `, name => {
    console.log(`Welcome ${name}`);
    rLine.close();
});

process.on('exit', val =>{
    console.log("Process exiting ", val);
});

process.on('beforeExit', val => {
    console.log("Before Exiting ", val);
});