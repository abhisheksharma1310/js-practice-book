//write a program that takes two numaber as input startnumber and endnumber and return an array according to below conditions:

//if a number in range divisible by both 3 and 5 then add "FizzBuzz" at that index in the array.
//if a number in range divisible by 3 then add "Fizz" at that index in the array.
//if a number in range divisible by 5 then add "Buzz" at that index in the array.

function FizzBuzz(start, end) {
  const arr = [];
  for (let i = start; i < end; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 == 0) {
      arr.push("Fizz");
    } else if (i % 5 == 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

console.log(FizzBuzz(1, 31));
