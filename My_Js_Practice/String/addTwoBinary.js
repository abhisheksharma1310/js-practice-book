/**
 * Program to add two binary strings
 */

function addTwoBinary(s1, s2) {
  s1 = parseInt(s1, 2);
  s2 = parseInt(s2, 2);
  const res = s1 + s2;
  return res.toString(2);
}
console.log(addTwoBinary("011", "01"));
