function palindrome(str) {
  const alphanumericString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const reverseString = alphanumericString.split("").reverse().join("");
  return alphanumericString === reverseString;
}

console.log(palindrome("eye"));
