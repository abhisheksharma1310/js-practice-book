const fs = require('fs');

const folderName = 'public';

//create folder
try {
    //check folder exist in current directory
    if (!fs.existsSync(folderName)) {
        //create a folder with name 'public'
        fs.mkdirSync(folderName);
        console.log('folder has been created!');
    } else {
        console.log('folder exist: ', folderName);
    }
} catch (error) {
    console.log(error);
}

//check folder content
const folderPath = `./${folderName}`;
let val1 = fs.readdirSync(folderPath);
console.log(`Folder: ${folderName} contain: ${val1}`);

//create file
try {
    //check if folder is empty
    if(val1.length == 0){
        //create a html file
        fs.writeFile(folderPath+'/index.html','<h1>Hello World</h1>','utf8', (err)=>{
            if(err) throw err;
            console.log('index.html file created');
        });
    } else {
        console.log('index.html file exist');
    }
} catch (error) {
    console.log(error);
}