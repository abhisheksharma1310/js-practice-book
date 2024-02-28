const lodash = require('lodash');

let ran1 = lodash.random(100);
let ran2 = lodash.random(100, 1000);
console.log(ran1, ran2);

const arr = [3,5,77,1,3,2323,3,32432, 'test'];
console.log(lodash.shuffle(arr));

lodash.times(10, ()=>{
    console.log(lodash.random(100, 1000));
});