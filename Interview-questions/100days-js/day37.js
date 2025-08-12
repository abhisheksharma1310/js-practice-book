//calculate simple interest

function calculateSimpleInterest(amount, rate, time) {
  return (amount * rate * time) / 100;
}

console.log(calculateSimpleInterest(1000, 5, 3)); // 150
