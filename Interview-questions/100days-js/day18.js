// Write a function to check if a character is uppercase or lowercase.

function isUpperCase(char) {
  //return char >= "A" && char <= "Z";
  return char === char.toUpperCase();
  return char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
}

function isLowerCase(char) {
  //return char >= "a" && char <= "z";
  return char === char.toLowerCase();
  return char.charCodeAt(0) >= 96 && char.charCodeAt(0) <= 121;
}

console.log(isUpperCase("B"));
console.log(isUpperCase("c"));
console.log(isLowerCase("b"));
console.log(isLowerCase("C"));
