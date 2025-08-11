//write a function to check if a given string starts with a specific substring.

function startsWith(str, subStr) {
  str = str.toLowerCase();
  subStr = subStr.toLowerCase();
  //return str.startsWith( subStr );

  return subStr === str.slice(0, subStr.length);
}

console.log(startsWith("Hello world", "hello"));
console.log(startsWith("Hello world", "Wello"));
