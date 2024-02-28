/**
 * Converting Roman Numerals to Decimal lying between 1 to 3999
 */

function RomanToDecimal (roman) {
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const size = roman.length;
    let decimal = 0;
    for(let i=0; i<size; i++){
        const value1 = romanNumerals[roman[i]];
        const value2 = romanNumerals[roman[i !== size ? i+1 : i]];
        if(value1 < value2){
            decimal -= value1;
        } else {
            decimal += value1;
        }
    }
    return decimal;
}

console.log(RomanToDecimal("MCMIV"));
console.log(RomanToDecimal("IX"));
console.log(RomanToDecimal("XL"));