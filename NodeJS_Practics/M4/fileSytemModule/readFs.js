const fs = require('fs');
const fileName = 'test.txt';
const data = fs.readFileSync(fileName, 'utf-8');
console.log(data);

const arr = ['red', 'blue', 'green'];

//update file content
function updateFile(val){
    fs.appendFile(fileName, '\n'+val, (err)=>{
        if(err) throw err;
        console.log("Written: ", val);
    });
}

arr.forEach(val => updateFile(val));