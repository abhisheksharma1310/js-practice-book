/**
 * Integer Numbers
 * whole numbers together with negative of counting numbers {-3, -2, -1, 0, 1, 2, 3} ... are called Integer numbers.
 */

 function integerNumber(ncount = -100, count= 100) {
    for(let num = -1; num > ncount; num--){
        console.log(num);
    };
    for(let num = 0; num < count; num++){
        console.log(num);
    };
};

integerNumber();