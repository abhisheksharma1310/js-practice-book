/**
 * ## 1. Odd or Even?
 - [ ] Take a number and find if the number is an odd or even number.
 - [ ] Print the number and result in the console.
 * @param {*} num number
 */
function checkOddEven(num) {
  const res = num % 2 === 0 ? "even" : "odd";
  console.log(`${num} is ${res}`);
}
checkOddEven(24);
checkOddEven(13);

/**
 *
## 2. Do you have a Driving License?
Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

- [ ] Manage `age` as a variable.
- [ ] Check if the age is elligible for a driving license and print it on the console accordingly.
 */
function eligibilityForDrivingLicense(age) {
  const res = age >= 18 ? "eligible" : "not eligible";
  console.log(`Your age is ${age} you are ${res}`);
}
eligibilityForDrivingLicense(18);
eligibilityForDrivingLicense(8);

/**
 * 3. Calculate CTC with a Bonus
Let's calculate how much you earn from your office.

[ ] You get 12,300 rupees as your monthly salary.
[ ] You get a 20% bonus on your annual salary.
[ ] How much money do you make per annum as a CTC?
 */
function calculateCTC(salary) {
  const annualSalary = 12 * salary;
  const bonus = (20 / 100) * annualSalary;
  return annualSalary + bonus;
}
console.log("CTC: ", calculateCTC(12300));

/**
 *4. Write a program for the Traffic Light Simulation.
Red Light... Green Light... Let's Play!

[ ] Create a color variable.
[ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
 */
function trafficLight(color) {
  color = color.toLowerCase();
  if (color === "red") {
    return "STOP";
  } else if (color === "green") {
    return "GO";
  }
}
console.log("TrafficLight: ", trafficLight("Red"));

/**
 * 5. Create an Electricity Bill Calculator
Let's calculate how much you pay for electricity bills per month and annually.

[ ] Create a units variable. Based on this value you will calculate the total electricity bill for a months.
[ ] If each day you consume the units and each unit cost 150 rupees, how much will you be charged per month?
[ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
 */
function billCalculator(units) {
  const unitCharge = 150;
  const monthlyCharge = unitCharge * units * 30;
  const anuualCharge = monthlyCharge * 12;
  const discount = (20 / 100) * anuualCharge;
  const totalAnnualCharge = anuualCharge - discount;
  return totalAnnualCharge;
}
console.log(billCalculator(3));

/**
 * 6. Leap Year Checker
Is 2025 a Leap Year?

[ ] Take year as input.
[ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
 */
function leapYear(year) {
  if (year % 4 == 0) {
    return `${year} is a leap year`;
  } else if (year % 100 == 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}
console.log(leapYear(2000));
console.log(leapYear(2004));
console.log(leapYear(2002));
console.log(leapYear(2003));

/**
 * 7. Max of Three Numbers
Find the max number from the lot.

[ ] Take three numbers and assign them to variables p, q, and r.
[ ] Now find the maximum of these three numbers using the comparison operators.
 */
function maxNum(p, q, r) {
  if (p > q && p > r) {
    console.log("P is greater");
  } else if (q > p && q > r) {
    console.log("Q is greater");
  } else if (r > p && r > q) {
    console.log("R is greater");
  } else {
    console.log("all are equal");
  }
}
maxNum(2, 4, 6);
maxNum(2, 2, 2);

/**
 * 8. Bitwise Doubling
A tricky one for you

[ ] Create a variable count and assign a value, say, 5.
[ ] Now use the Bitwise shift operator to make the number double.
[ ] Print it on the console.
 */
function doubleBitwise(num) {
  return num << 1;
}
console.log("double", doubleBitwise(5));
