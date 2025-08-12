//Write a function called repeatString that takes two parameters str, and a number.

function repeatString(str, n) {
  let newStr = str;
  for (let i = 1; i < n; i++) {
    newStr += str;
  }
  return newStr;
  return str.repeat(n);
}

console.log(repeatString("abc", 0));
console.log(repeatString("abc", 5));
