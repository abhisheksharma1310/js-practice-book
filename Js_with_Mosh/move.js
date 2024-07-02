const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    return "invalid Offset.";
  }

  const output = [...array];
  const elementMove = output.splice(index, 1)[0];
  output.splice(position, 0, elementMove);
  return output;
}

console.log(move(numbers, 0, 1));
