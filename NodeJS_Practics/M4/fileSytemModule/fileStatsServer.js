const fs = require('fs');
const http = require('http');
const dir = './public';
const mainFile = 'new0.html';
const url = `${dir}/${mainFile}`;

//create http server
http.createServer((req, res)=>{
    fs.readFile(url, (err, html)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        return res.end();
    });
    console.log("Server running on port 8080");
}).listen(8080);

//
const rs = fs.createReadStream(url);
rs.on('open', (e)=>{
    console.log('File is open');
    let val = '<br> Opened';
    updateFile(val);
});

//
function updateFile(val){
    fs.appendFile(url, val, (err)=>{
        if(err) throw err;
        console.log('updated file');
    });
};

//
fs.stat(url, (err, stats)=>{
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.size);
})
