//generate random hex color ex: #23aedf;
//#000000 #ffffff;

function generateHexColor() {
  let colorCode = "#";
  colorCode += Math.random().toString(16).slice(2, 8);
  return colorCode;
}

console.log(generateHexColor());
console.log(generateHexColor());
console.log(generateHexColor());
console.log(generateHexColor());
console.log(generateHexColor());
console.log(generateHexColor());

// #d7f5f6
// #b357da
// #7a7ff5
// #5e4085
// #d5d3b4
// #6fb093

// #bca837
// #3a1928
// #406815
// #1c61f8
// #ff699d
// #34f04d
