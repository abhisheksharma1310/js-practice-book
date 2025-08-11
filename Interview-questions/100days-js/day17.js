//write a function to convert a string in camelCase and snake_case

function toCamelCase(str) {
  const strArr = str.trim().toLowerCase().split(" ");
  let res = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    res += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
  }
  return res;
}

function toSnakeCase(str) {
  const strArr = str.trim().toLowerCase().split(" ");
  let res = strArr[0];
  for (let i = 1; i < strArr.length; i++) {
    res += "_" + strArr[i];
  }
  return res;
}

console.log(toCamelCase("hello world"));
console.log(toSnakeCase("hello world"));
