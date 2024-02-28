/**
 * An string or integer is a palindrome when it reads the same forward and backward.
 */

function palindrome(str){
      return str.toString().toLowerCase() == str.toString().toLowerCase().split("").reverse("").join("");
}

console.log(palindrome(121));
console.log(palindrome(122));
console.log(palindrome("mAdam"));
console.log(palindrome("car"));