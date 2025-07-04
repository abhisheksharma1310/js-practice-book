//

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}

//alternate
function swap1(a, b) {
  [a, b] = [b, a];
  console.log(a, b);
}

swap(2, 4);
swap1(2, 4);
