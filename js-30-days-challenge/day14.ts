/**
 * Objective
Today we're discussing scope. Check out the Tutorial tab for learning materials and an instructional video!

The absolute difference between two integers,  and , is written as . The maximum absolute difference between two integers in a set of positive integers, , is the largest absolute difference between any two integers in .

The Difference class is started for you in the editor. It has a private integer array () for storing  non-negative integers, and a public integer () for storing the maximum absolute difference.

Task
Complete the Difference class by writing the following:

A class constructor that takes an array of integers as a parameter and saves it to the  instance variable.
A computeDifference method that finds the maximum absolute difference between any  numbers in  and stores it in the  instance variable.
Input Format

You are not responsible for reading any input from stdin. The locked Solution class in the editor reads in  lines of input. The first line contains , the size of the elements array. The second line has  space-separated integers that describe the  array.

Constraints

, where 
Output Format

You are not responsible for printing any output; the Solution class will print the value of the  instance variable.

Sample Input

STDIN   Function
-----   --------
3       __elements[] size N = 3
1 2 5   __elements = [1, 2, 5]
Sample Output

4
Explanation

The scope of the  array and  integer is the entire class instance. The class constructor saves the argument passed to the constructor as the  instance variable (where the computeDifference method can access it).

To find the maximum difference, computeDifference checks each element in the array and finds the maximum difference between any  elements: 


The maximum of these differences is , so it saves the value  as the  instance variable. The locked stub code in the editor then prints the value stored as , which is .
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

class Difference {
    private elements: number[];
    public maximumDifference: number;

    constructor(elements: number[]) {
        this.elements = elements;
        this.maximumDifference = 0;
    }

    computeDifference(): void {
        const n = this.elements.length;
        for (let i = 0; i < n; i++) {
            for (let j = i; j < n; j++) {
                const diff = Math.abs(this.elements[i] - this.elements[j]);
                this.maximumDifference = Math.max(this.maximumDifference, diff);
            }
        }
    }
}

function main() {
    // Enter your code here
    const n = Number(readLine());
    let arr = [];
    for(let i=0; i<n; i++) {
        arr.push(readLine());
    }
    let ar = arr[0].split(" ");
    let arr1 = ar.map((el) => Number(el));
    
    const diff = new Difference(arr1);
    diff.computeDifference();
    console.log(diff.maximumDifference);
}