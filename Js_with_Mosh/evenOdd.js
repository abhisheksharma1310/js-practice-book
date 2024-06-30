function showNumbers(number) {
  if (typeof number !== "number") {
    console.log("Enter a input of type number.");
  } else {
    for (let i = 0; i <= number; i++) {
      if (i % 2 == 0) console.log(i, "Even");
      else console.log(i, "Odd");
    }
  }
}

showNumbers(10);
