//airthematic operators in js
const calc = (operator, op1, op2=0) => {
    switch (operator.toLowerCase()) {
        case 'add':
            console.log("Sum is: ", op1 + op2);
            break;
        case 'subtract':
            console.log("Difference is: ", op1 - op2);
            break;
        case 'multiply':
            console.log("Product is: ", op1 * op2);
            break;
        case 'divide':
            console.log("Quotient is: ", op1 / op2);
            break;
        case 'modulus':
            console.log("Remainder is: ", op1 % op2);
            break;
        case 'increment':
            console.log("Incremented number is: ", ++op1);
            break;
        case 'decrement':
            console.log("decremented number is: ", --op1);
            break;
        default:
            console("First enter operator then first operand and then second operand");
            break;
    }
}
calc("add",2,4);

//logical operator
{
    let valAnd = (true)&&(true);
    console.log("valAnd: ", valAnd);
    let valOr = (false)||(true);
    console.log("valOr", valOr);
    let valNot = !(true);
    console.log("valNot", valNot);
}

//comparison operator
{
    let a = "5";
    let b = 5;
    console.log("a==b ", a==b);
    console.log("a===b ", a===b);
    console.log("a>b ", a>b);
    console.log("a<b ", a<b);
    console.log("a>=b ", a>=b);
    console.log("a<=b ", a<=b);
    console.log("a!=b ", a!=b);
    console.log("a!==b ", a!==b);
}

