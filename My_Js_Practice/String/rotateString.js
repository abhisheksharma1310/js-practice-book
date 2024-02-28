/**
 * Check if a string can be obtained by rotating another string 2 places
 */

function rotateString(str1, str2) {
  const s1 = clkWiseRotate(str1);
  const s2 = antiClkWiesRotate(str1);
  if (s1 == str2 || s2 == str2) return true;
  return false;
}

function clkWiseRotate(str) {
  let temp = str.split("");
  const c1 = temp.pop();
  const c2 = temp.pop();
  temp.unshift(c2, c1);
  return temp.join("");
}

function antiClkWiesRotate(str) {
  let temp = str.split("");
  const c1 = temp.shift();
  const c2 = temp.shift();
  temp.push(c1,c2);
  return temp.join("");
}

console.log(rotateString("amazon", "azonam"));
console.log(rotateString("amazon", "onamaz"));

function rotateString1 (str1, str2) {
  if(str1.length !== str2.length) return false;
  const size1 = str1.length;
  const s1 = str1.substring(size1-2, size1) + str1.substring(0, size1-2);
  const s2 = str1.substring(2) + str1.substring(0, 2);
  if(s1 == str2 || s2 == str2) return true;
  return false;
}

console.log(rotateString1("amazon", "azonam"));