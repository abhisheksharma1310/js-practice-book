const fs = require('fs');
const dir = './public';

console.clear();

//file counter
let tempCounter = 1;
let newFileName = `new${tempCounter}.html`;

//read directory and crate 5 file inside directory
function makeFile() {
    for (let i = 0; i < 5; i++) {
        try {
            fs.readdir(dir, (err, files) => {
                if (err) throw err;
                console.log(`
                Total files: ${files.length}
                files: ${files}
            `);
                tempCounter = files.length + i + 1;
                newFileName = `new${tempCounter}.html`;
                createNewFile(newFileName);
            });
        } catch (error) {
            console.log(error);
        }
    }
};
//makeFile();

//function to create new file
function createNewFile(fileName) {
    //create dynamic content for file
    const html = `<html> Hello ${tempCounter} </html>`;
    //append file in directory
    try {
        fs.appendFile(dir + '/' + fileName, html, (err) => {
            if (err) throw err;
            console.log(`File saved: ${fileName}`);
        });
    } catch (error) {
        console.log(error);
    }
}

//write a file in directory
function myLog(val){
    const html = ` - ${val}`;
    //overwriting the file
    fs.writeFile(dir+'/log.html', html, (err)=>{
        if(err) throw err;
        console.log(`Updated writeFile ${val}`);
    })
}
// myLog('test');

//update content of file in a directory or create file if does not exist
function myLogUpdate(val){
    const html = ` <br> *   ${val}`;
    //adding the content to the file without overwriting
    fs.appendFile(dir+'/log.html', html, (err)=>{
        if(err) throw err;
        console.log(`Appended ${val}`);
    })
}
//myLogUpdate('Test-update ' + new Date().toUTCString());


//rename file
function renameFile(fileName, newName){
    fs.rename(fileName, newName, (err)=>{
        if(err) throw err;
        console.log(`File renamed ${newName} from ${fileName}`);
    });
};

//rename multiple file
function renameAll(){
    fs.readdir(dir, (err, files)=>{
        if(err) throw err;
        files.forEach((file, ind) => {
            renameFile(dir+'/'+file, `${dir}/new${ind}.html`);
        });
    });
};
renameAll();

//delete file
function deleteFile(val){
    fs.unlink(val, (err)=>{
        if(err) throw err;
        console.log(`File deleted: ${val}`);
    });
};
//deleteFile(dir + '/log.html');

//delete multiple files
function deleteAllFile(){
    fs.readdir(dir, (err, files)=>{
        if(err) throw err;
        files.forEach(file => {
            deleteFile(dir+'/'+file);
        });
    });
};
//deleteAllFile();