/**
 * Objective
Today, we're learning about Interfaces. Check out the Tutorial tab for learning materials and an instructional video!

Task
The AdvancedArithmetic interface and the method declaration for the abstract divisorSum(n) method are provided for you in the editor below.

Complete the implementation of Calculator class, which implements the AdvancedArithmetic interface. The implementation for the divisorSum(n) method must return the sum of all divisors of .

Example

The divisors of  are . Their sum is .


The divisors of  are  and their sum is .

Input Format

A single line with an integer, .

Constraints

Output Format

You are not responsible for printing anything to stdout. The locked template code in the editor below will call your code and print the necessary output.

Sample Input

6
Sample Output

I implemented: AdvancedArithmetic
12
Explanation

The integer  is evenly divisible by , , , and . Our divisorSum method should return the sum of these numbers, which is . The Solution class then prints  on the first line, followed by the sum returned by divisorSum (which is ) on the second line.
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
    const n = parseInt(inputLines[0]);
    let divisors: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            divisors.push(i);
        }
    }
    const sum = divisors.reduce((acc, curr) => acc + curr, 0);
    console.log("I implemented: AdvancedArithmetic");
    console.log(sum);
}