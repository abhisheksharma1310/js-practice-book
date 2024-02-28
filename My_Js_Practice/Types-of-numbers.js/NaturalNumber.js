/**
 * Natural Numbers
 * Counting numbers 1,2,3 ... are called nautural numbers.
 */

function naturalNumber(count = 100) {
    for(let num = 1; num < count; num++){
        console.log(num);
    };
};

naturalNumber(100);

export default naturalNumber;