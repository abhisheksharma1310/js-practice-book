/**
 * Hamming Distance
 * Given two strings x and y, return the Hamming distance between them.
 * Input: x = "hello", y: "hwllr"
 * output: 2 (hello) (hwllr)
 *                     |  |
 */

 function HammingDistance(x,y){
    if(x.length !== y.length) {
        throw new Error("Strings must be of same length.");
    }
    let distance = 0;
    for(let i=0; i<x.length; i++){
        if(x[i] !== y[i]) distance += 1;
    }
    return distance;
 }

 console.log(HammingDistance("hello", "hwllr"));

 /**
  * 
  * @param {binary number} x 
  * @param {binary number} y 
  * @returns number
  */
 function HammingDistanceBinary(x,y){
    x = x.toString(2);
    y = y.toString(2);
    if(x.length < y.length) {
        while(x.length !== y.length) x ="0"+x;
    } else {
        while(x.length !== y.length) y ="0"+y;
    }
    console.log(x, y);
    let distance = 0;
    for(let i=0; i<x.length; i++){
        if(x[i] !== y[i]) distance += 1;
    }
    return distance;
 }

 console.log(HammingDistanceBinary(1,44))
