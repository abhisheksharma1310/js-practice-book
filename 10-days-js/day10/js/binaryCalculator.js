const res = document.getElementById("res");
const buttons = document.getElementById("btns");

let result = "";

buttons.addEventListener("click", function (event) {
  //get input from user
  const input = event.target.innerHTML;

  //take action based on key clicked
  switch (input) {
    case "0":
      result += 0;
      res.innerHTML = result;
      break;
    case "1":
      result += 1;
      res.innerHTML = result;
      break;
    case "C":
      result = "";
      res.innerHTML = result;
      break;
    case "=":
      result = evaluateBinaryExpression(result);
      res.innerHTML = result;
      break;
    case "+":
      result += "+";
      res.innerHTML = result;
      break;
    case "-":
      result += "-";
      res.innerHTML = result;
      break;
    case "*":
      result += "*";
      res.innerHTML = result;
      break;
    case "/":
      result += "/";
      res.innerHTML = result;
      break;
    default:
      result = "";
      break;
  }
});

function evaluateBinaryExpression(expression) {
  // Split the expression by operators (+, -, *, /)
  const parts = expression.split(/([+\-*/])/);

  // Initialize the result with the first binary number
  let result = parseInt(parts[0], 2);

  // Iterate through the remaining parts
  for (let i = 1; i < parts.length; i += 2) {
    const operator = parts[i];
    const binaryNumber = parts[i + 1];

    // Convert the binary number to decimal
    const decimalNumber = parseInt(binaryNumber, 2);

    // Perform the operation based on the operator
    switch (operator) {
      case "+":
        result += decimalNumber;
        break;
      case "-":
        result -= decimalNumber;
        break;
      case "*":
        result *= decimalNumber;
        break;
      case "/":
        result /= decimalNumber;
        break;
      default:
        // Handle invalid operators (optional)
        console.error(`Invalid operator: ${operator}`);
    }
  }

  const intRes = parseInt(result);
  return intRes.toString(2);
}
