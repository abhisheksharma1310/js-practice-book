//Validate credit card number using Luhn Algorithm.

//Here are the steps 👉👉 Luhn Algorithm Steps:
// Steps of the Luhn Algorithm
// Prepare the Number:
//? Start with the digits of the number. For example, if validating the number 79927398713.
//? Reverse the Digits:
//? Reverse the digits of the number. For the example, it becomes 31789379297.
//todo Double Every Second Digit:
// Starting from the first digit, double every second digit.
//todo For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//? Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
//? Subtract 9 from Numbers Higher Than 9:

// 16 = 16 - 9 = 7
// 16 = 1 + 6 =7

// 14 = 14-9= 5
// 14= 1+4=5

// If doubling the number results in a number greater than 9, subtract 9 from it.
//? Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//todo Sum All Digits:
//? Add all the digits together.
//* 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//todo Check Modulo 10:
//? If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.

function validateCard(number) {
  // Convert to string, reverse, and split into array
  number = number.toString().split("").reverse();
  // Apply Luhn transformation
  number = number.reduce((acc, num, index) => {
    //double evry second digit
    num = Number(num);
    num = index % 2 == 1 ? num * 2 : num;
    //if any number greater than 9 then subtract 9
    num = num > 9 ? num - 9 : num;
    //sum every digits
    return (acc += num);
  }, 0);
  // check sum module 10 or not
  return number % 10 === 0;
}

console.log(validateCard(1234678910234567));
console.log(validateCard(6080320115748065));
console.log(validateCard(4591150009498551));
