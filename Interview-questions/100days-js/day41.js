//write a function named convertCurrency that takes three parameters: amount, fromCurrency and toCurrency.

//use USD as base currency for conversion

const rates = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.8,
  INR: 82,
};

function convertCurrency(amount, fromCurrency, toCurrency) {
  let amountInUSD = amount / rates[fromCurrency];
  let convertedCurrency = amountInUSD * rates[toCurrency];
  return convertedCurrency.toFixed(2);

  return ((amount / rates[fromCurrency]) * rates[toCurrency]).toFixed(2);
}

console.log("GBP => INR: ", convertCurrency(1, "GBP", "INR"), " INR");
console.log("INR => GBP: ", convertCurrency(1, "INR", "GBP"), " GBP");
console.log("EUR => INR: ", convertCurrency(1, "EUR", "INR"), " INR");
console.log("INR => EUR: ", convertCurrency(1, "INR", "EUR"), " EUR");
console.log("USD => INR: ", convertCurrency(1, "USD", "INR"), " INR");
console.log("USD => GBP: ", convertCurrency(1, "USD", "GBP"), " GBP");
console.log("USD => EUR: ", convertCurrency(1, "USD", "EUR"), " EUR");
console.log("INR => USD: ", convertCurrency(1, "INR", "USD"), " USD");
console.log("GBP => USD: ", convertCurrency(1, "GBP", "USD"), " USD");
console.log("EUR => USD: ", convertCurrency(1, "EUR", "USD"), " USD");

/**
 * If 1 GBP = 0.8 USD and 1 USD = 82 INR, then:

1 GBP → USD: 1 / 0.8 = 1.25 USD

1.25 USD → INR: 1.25 * 82 = 102.5 INR

So the output should be 102.5.
 */
