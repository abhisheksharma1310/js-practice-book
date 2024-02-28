const http = require('http');

//console.log(http);

//create http server
http.createServer((req, res) => {
    //send hhtp header first 
    //header contain status code and response header
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //send response
    res.write('Hello');
    res.write('World!\n');
    //current url
    if (req.url != '/') {
        res.write(`<br> URL = ${req.url}`)
    }
   //end response or close http connection
   //res.end('<br> Hello World');
   res.end();
}).listen(8080);
