//conditional statements in js
//if else statements
if (true) {
  console.log("Statement is true");
} else {
  console.log("Statement is false");
}

//if else if statements
if (false) {
  console.log("Statement is true");
} else if (true) {
  console.log("Statement is true");
} else {
  console.log("Statement is false");
}

//Nested if else
if (true) {
  if (true) {
    console.log("Statement is true");
  }
} else {
  console.log("Statement is false");
}

//ternary operator
let age = 25;
const msg = age > 18 ? "You are an adult" : "you are teeneger";
console.log(msg);

//switch statements
let key = "none";
switch (key) {
  case "yes":
    console.log("yes");
    break;
  case "no":
  case "none":
    console.log("no");
    break;
  default:
    console.log("default");
    break;
}
