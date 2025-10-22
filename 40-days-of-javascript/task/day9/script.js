/**
 * 1. Expian Temporal Dead Zone by creating 3 variables in side a block. Post the code as your answer.
 */
console.log(hoistVar); //accessible due to hoisting and tdz not applied for var, and value will be undefined
console.log(nothoistVar); //hoisted but due tdz can not accesible got reference error
console.log(nothoistConst); //hoisted but due tdz can not accesible got reference error
{
  var hoistVar = "hoistedVar";
  let nothoistVar = "nothoistedVar";
  const nothoistConst = "nothoistedVar";
}

/**
 * 2. Explain Variable and Function Hoisting with Example. Post the code as your answer.
 */
console.log(varhoisted); //hoisted, value undefined
hoistedFunction(); //hoisted and function called

var varhoisted = "varHosted";

function hoistedFunction() {
  console.log("Hoisted function");
}
