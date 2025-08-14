//parse extract number from given string

function extractNumber(str) {
  const regex = /\d+/g;
  return str.match(regex);
}

console.log(extractNumber("abc9845agh345kju89ud")); // [ '9845', '345', '89' ]
