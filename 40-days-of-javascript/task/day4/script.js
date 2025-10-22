/**
 * 1. What will be the output of this code snippet and why?
let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}
 */
//output will be It's a normal day.

/**
 * 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.
 */
function atmSystem(amount) {
  return amount % 100 === 0 ? "Withdrawal successful" : "Invalid amount";
}
console.log(atmSystem(3100));
console.log(atmSystem(3150));

/**
 * 3. Build a Calculator with switch-case
Write a simple calculator that takes an operator (+, -, , /, %) as input, and performs the operation on two numbers. Print the output on the console.
 */
function calculator(operand1, operator, operand2 = 0) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    case "%":
      return operand1 % operand2;
  }
}
console.log("add 2,3", calculator(2, "+", 3));
console.log("sub 3,2", calculator(3, "-", 2));
console.log("divide 4,2", calculator(4, "/", 2));

/**
 * 4. Pay for your movie ticket
Imagine, the INOX charges ticket prices based on age:

Children (<18 years): $3
Adults (18 - 60 years): $10
Seniors (60+ years): $8
Write a program that prints the ticket price based on the person’s age.
 */
function ticketPrice(age) {
  if (age > 60) {
    return "$8";
  } else if (age < 60 && age > 18) {
    return "$10";
  } else {
    return "$3";
  }
}
console.log(ticketPrice(65));
console.log(ticketPrice(45));
console.log(ticketPrice(15));

/**
 *5. Horoscope Sign Checker
Write a program that prints the zodiac sign(Aries, Taurus, Gemini, etc.) based on a person’s birth month. Make it month bases, not date based. Like March and April borns are Aries, Aplil and May born are Taurus, and so on. Do not use if-else.
 */
function horoscope(month) {
  switch (month) {
    case "march":
      return "Aries";
    case "april":
    case "may":
      return "Taurus";
  }
}
console.log(horoscope("march"));

/**
 * 6. Which Triangle?
A triangle has 3 sides. A Triangle type is determined by its sides:

All sides equal is called, Equilateral Triangle.
Two sides equal is called, Isosceles Triangle.
All sides different is called, Scalene Triangle.
Take the sides of a triangle as input and write a program to determine the triangle type. Change the inputs everytime manually to see if the output changes correctly.
 */
function triangleType(s1, s2, s3) {
  if (s1 == s2 && s1 == s3) {
    return "Equilateral Triangle";
  } else if (s1 == s2 || s2 == s3 || s1 == s3) {
    return "Isosceles Triangle";
  } else {
    return "Scalene Triangle";
  }
}
console.log(triangleType(2, 2, 2));
console.log(triangleType(2, 4, 2));
console.log(triangleType(2, 3, 4));
