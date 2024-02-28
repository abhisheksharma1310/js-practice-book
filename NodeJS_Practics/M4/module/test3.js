const val1 = 'Hello world';
const val2 = 'Test Private 2';
const val3 = 'New Message';

const output = (message)=>{
    return `Message: ${message}, Private value: ${val2}`
}


module.exports.output = output;
module.exports.val1 = val1;
module.exports.val3 = val3;
