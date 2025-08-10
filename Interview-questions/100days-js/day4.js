//Find triangle type

//Write a function called checkTriangleType that takes three parameters representing the length of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", "scalene".

function checkTriangleType(a, b, c) {
  //if three sides are equal
  if (a == b && b == c) return "equilateral";
  //if two sides are equal
  if (a == b || b == c || a == c) return "isosceles";
  //if not any sides equall
  return "scalene";
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(3, 4, 5));
