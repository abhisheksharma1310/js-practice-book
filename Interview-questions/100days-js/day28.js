//Write a function called truncateString that takes two parameters: str and maxlength, if its length exceed then truncate and add ... to end of string

function truncateString(str, len) {
  return str.length > len ? str.slice(0, len) + "..." : str;
}

console.log(truncateString("Abhishek", 3));
console.log(truncateString("Abhishek", 8));
