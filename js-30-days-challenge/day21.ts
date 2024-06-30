/**
 * Objective
Today we're discussing Generics; be aware that not all languages support this construct, so fewer languages are enabled for this challenge. Check out the Tutorial tab for learning materials and an instructional video!

Task
Write a single generic function named printArray; this function must take an array of generic elements as a parameter (the exception to this is C++, which takes a vector). The locked Solution class in your editor tests your function.

Note: You must use generics to solve this challenge. Do not write overloaded functions.

Input Format

The locked Solution class in your editor will pass different types of arrays to your printArray function.

Constraints

You must have exactly  function named printArray.
Output Format

Your printArray function should print each element of its generic array parameter on a new line.
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function (inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function (): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    let arr: Array<any> = [];
    const n = parseInt(inputLines[0]);
    const w = parseInt(inputLines[n + 1]);
    arr.push(...inputLines.slice(1, n + 1));
    arr.push(...inputLines.splice(n + 2, n + 2 + w));
    printArray(arr);
}

function printArray(arr: Array<any>) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}