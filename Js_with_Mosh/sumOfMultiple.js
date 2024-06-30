// Multiple of 3: 3, 6, 9
// Multiple of 5: 5, 10

function sumOfMultiple(limit) {
  let sum = 0;
  for (let i = 0; i <= limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) sum += i;
  }

  return sum;
}

console.log(sumOfMultiple(10));
