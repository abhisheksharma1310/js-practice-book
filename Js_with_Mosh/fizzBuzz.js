// if no. is divisible by 3 we get Fizz
// if no. is divisible by 5 we get Buzz
// if no. is divisible by 3 and 5 we get FizzBuzz
// if no. is not divisible by 3 and 5 we get same no.
// if given input is not a number return "Not a number"

function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a number";
  } else if (input % 3 == 0 && input % 5 == 0) {
    return "FizzBuzz";
  } else if (input % 3 == 0) {
    return "Fizz";
  } else if (input % 5 == 0) {
    return "Buzz";
  } else {
    return input;
  }
}

const result = fizzBuzz(15);
console.log(result);
