/**
 * Converting Decimal Number lying between 1 to 3999 to Roman Numerals
 */

function decimaToRoman(num) {
  const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let res = "";
  for(let i=0; i<decimal.length; i++){
    while(num >= decimal[i]){
        res += roman[i];
        num -= decimal[i];
    }
  }
  return res;
}

console.log(decimaToRoman(1904));