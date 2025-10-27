/**
 * 1. What will be the output of the following code?
 */
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}
//ReferenceError

/**
 * 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
 */
function processPayment(amount, balance) {
  try {
    if (amount < 0 || amount > balance) {
      throw new Error("Invalid amount");
    }
  } catch (error) {
    console.log("Error: ", error);
  }
}
processPayment(-400, 500);
processPayment(400, 100);

/**
 * 3. Implement a custom error handling system for an e-commerce website that categorizes errors as
UserError
PaymentError
ServerError
EmailError
 */
function PaymentError(name, message) {
  this.name = name;
  this.message = message;
  this.stack = new Error().stack;
}

PaymentError.prototype = Object.create(Error.prototype);

function validatePayment(status) {
  if (status == "userError") {
    throw new PaymentError(status, "Payment due to invalid user details");
  } else if (status == "paymentError") {
    throw new PaymentError(status, "Payment fail due to bank decline payment");
  } else if (status == "serverError") {
    throw new PaymentError(status, "Payment fail due to server error");
  } else if (status == "emailError") {
    throw new PaymentError(
      status,
      "Payment error due to invalid email address"
    );
  }
  return "Payment Successfull";
}

function handlePayment() {
  try {
    const message = validatePayment("userError");
    console.log(message);
  } catch (error) {
    console.log("PaymentError: ", error);
  }
}
handlePayment();

/**
 * 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch
 */
function fetchData(url) {
  try {
    if (!url.startsWith("https")) {
      throw new Error("Invalid URL " + url);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchData("https://google.com");
fetchData("google.com");

/**
 * 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors
 */
function ValidationError(message) {
  this.name = "ValidationError";
  this.message = message;
  this.stack = new Error().stack;
}

function validateUser(userInput) {
  try {
    if (!userInput.username) {
      throw new ValidationError("Username cannot be empty");
    } else if (!userInput.age || userInput.age < 0) {
      throw new ValidationError("Age must be  a positive number");
    }
  } catch (error) {
    console.log(error);
  }
}

const userInput = {
  username: "",
  age: -2,
};
validateUser(userInput);

/**
 * 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources.
 * Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.
 */
function readFile(filePath) {
  try {
    if (!validatePath(filePath)) {
      throw new Error("Invalid file path");
    }
    console.log("File reading successfull");
  } catch (error) {
    console.log(error);
  } finally {
    console.log("IO resources released");
  }
}

function validatePath(filePath) {
  return !!filePath;
}

//readFile("c/act/doc/text.tx");
readFile("");

/**
 * 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"
 */
function parseJson(str) {
  try {
    const json = JSON.parse(str);
    console.log(json);
  } catch (error) {
    console.log("Inavalid JSON ", error);
  }
}
parseJson("");

/**
 * 8. What is the purpose of throw in JavaScript?
 */
//It creates a new error manually

/**
 * 9. What does the finally block do in a try...catch statement?
 */
//Runs regardless of whether an error occurs or not

/**
 * 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object
 */
/**
 * 
Keyword/Concept	Usage	Example
try	=> Defines a block of code to test for errors.
catch => Defines a block of code to handle errors thrown in the try block.
throw => Used to throw a custom error or exception.
rethrow =>	Re-throws an error caught in the catch block, allowing it to propagate further.
Error Object =>	Represents an error and provides properties like message and name for debugging.
 */
