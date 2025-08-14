//write a function to validate date using regex

//MM/DD/YYYY
//01/01/1990
//12/31/2999
//01-01/1990

function isDateValid(date) {
  const regex =
    /^(0[1-9]|1[0-2])(\/|-)(0[1-9]|[12][1-9]|3[0-1])(\/|-)((19|20)[0-9]{2})$/;
  return regex.test(date);
}

console.log(isDateValid("01/01/1990")); //true
console.log(isDateValid("01-01-1990")); //true
console.log(isDateValid("13/32/0000")); //false
console.log(isDateValid("11/21/0000")); //false
console.log(isDateValid("23/01/1111")); //false
