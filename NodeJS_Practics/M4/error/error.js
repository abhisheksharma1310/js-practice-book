const fs = require('fs');
const dir = 'public';

fs.readdir(dir, (err, files)=>{
    if(err) throw err;
    console.log(files);
});

try {
    console.log("try");
} catch (err) {
    console.log(err);
}

class myError extends Error {}

throw new myError('new Error');
