//generate text based bar chart use *

function generateBarChart(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}: `, "*".repeat(arr[i]));
  }
}

console.log(generateBarChart([5, 3, 9, 2]));
