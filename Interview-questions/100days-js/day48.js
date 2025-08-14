//Filtering valid hex color code in data processing

function isHexValid(hexcode) {
  const regex = /^#([\da-fA-F]{3}|[\da-fA-F]{6})$/;
  return regex.test(hexcode);
}

console.log(isHexValid("#a3c113"));
console.log(isHexValid("#a3c1135689"));
console.log(isHexValid("#a3c11g"));
console.log(isHexValid("#a3d"));
console.log(isHexValid("#a3j"));
console.log(isHexValid("#a3j567db"));
