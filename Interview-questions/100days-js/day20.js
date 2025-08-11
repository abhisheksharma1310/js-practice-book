//write a function to reverse a string without using inbuilt method

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str.charAt(i);
  }
  return rev;
}

console.log(reverseString("hello"));
