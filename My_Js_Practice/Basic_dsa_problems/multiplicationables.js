/**
 * Program to print multiplication table of a number
 */

function multiplicationTable (num) {
    for(let i=1; i<=10; i++){
        const table = `${num} * ${i} = ${num*i}`;
        console.log(table);
    }
}

multiplicationTable(5);