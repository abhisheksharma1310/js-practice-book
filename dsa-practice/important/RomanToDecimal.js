function romanToDecimal(roman) {
    // Define an object to store the values of Roman numerals
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let decimal = 0;
    // Loop through the Roman numeral string from right to left
    for (let i = roman.length - 1; i >= 0; i--) {
      const currentSymbol = roman[i];
      const currentValue = romanNumerals[currentSymbol];
      // Check if the current symbol is less than the next symbol (if it exists)
      if (i < roman.length - 1) {
        const nextSymbol = roman[i + 1];
        const nextValue = romanNumerals[nextSymbol];
        // If the current symbol is smaller than the next symbol, subtract its value
        if (currentValue < nextValue) {
          decimal -= currentValue;
        } else {
          decimal += currentValue;
        }
      } else {
        // If there is no next symbol, simply add the current value
        decimal += currentValue;
      }
    }
    return decimal;
  }
  // Example usage:
  const romanNumeral = "LIXIV"; // Change this to the Roman numeral you want to convert
  const decimalNumber = romanToDecimal(romanNumeral);
  console.log(`The decimal equivalent of ${romanNumeral} is ${decimalNumber}`);