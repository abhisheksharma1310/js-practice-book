/**
 * Objective

In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

Task

Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

If , then .
If , then .
If , then .
If , then .
If , then .
If , then .
Input Format

Stub code in the editor reads a single integer denoting  from stdin and passes it to the function.

Constraints

Output Format

The function must return the value of  (i.e., the letter grade) that Julia earned on the exam.

Sample Input 0

11
Sample Output 0

D
Explanation 0

Because , it satisfies the condition  (which corresponds to D). Thus, we return D as our answer.

Language: JavaScript (Node.js)
More
242526272829303132333435363738394041424344454647481
        grade = "C";
    } else if (score > 10 && score <= 15) {
        grade = "D";
    } else if (score > 5 && score <= 10) {
        grade = "E";
    } else if (score >= 0 && score <= 5) {
        grade = "F";
    }
    return grade;
}

Line: 39 Col: 21

Test against custom input
Days of JS
You have earned 10.00 points!
You are now 2 challenges away from the 3rd star for your 10 days of js badge.
60%8/10
Congratulations
You solved this challenge. Would you like to challenge your friends?Share on FacebookShare on TwitterShare on LinkedIn

Test case 0

Test case 1

Test case 2

Test case 3

Test case 4

Test case 5

Test case 6
Compiler Message
Success
Input (stdin)
11
Expected Output
D
 */

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score >= 0 && score <= 5) {
    grade = "F";
  }
  return grade;
}

function main() {
  const score = +readLine();

  console.log(getGrade(score));
}
