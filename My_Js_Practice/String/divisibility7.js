/**
 * Check divisibility by 7
 */

function divisibility7(num) {
  return num % 7 === 0;
}

console.log(divisibility7(371));

// function isDivisibleBy7(num) {
//   // If number is negative,
//     // make it positive
//     if( num < 0 )
//         return isDivisibleBy7( -num );
 
//     // Base cases
//     if( num == 0 || num == 7 )
//         return 1;
//     if( num < 10 )
//         return 0;
 
//     // Recur for ( num / 10 - 2 * num % 10 )
//     return isDivisibleBy7(num / 10 - 2 *
//                          (num - num / 10 * 10 ) );
// }

// console.log(isDivisibleBy7(371));
