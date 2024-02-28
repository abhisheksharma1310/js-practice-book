//function

/**
 * Function Declaration
 */

function funcDeclaration() {
    console.log("Function Declaration.");
};

funcDeclaration();

/**
 * Function Expression
 */

const funcExpression = function funcExpr() {
    console.log("Function Expression");
};

funcExpression();

/**
 * Arrow Function
 */

const arrowFunction = () => {
    console.log("Arrow Function");
};

arrowFunction();

/**
 * Arrow Function Short Hand
 */

const shortHandFunction = () => "Short Hand Function";

console.log(shortHandFunction());

/**
 * Function Argument
 */

function funcArgument(a, b) {
    return a+b;
};

const sum = funcArgument(5,6);
console.log("Sum: ",sum);

/**
 * Function Default Arguments
 */

function defArgument(name, country = "India") {
    console.log(name, "live in ", country);
};

defArgument("Abhishek");