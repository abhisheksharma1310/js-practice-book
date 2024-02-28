const http = require('http');
const json = require('./json1');
//console.log(http);

//create http server
http.createServer((req, res) => {
    //send hhtp header first 
    //header contain status code and response header
    res.writeHead(200, { 'Content-Type': 'application/json'});
    //send response as Json
    res.write(JSON.stringify(json));    
   //end response or close http connection
   res.end();
}).listen(8080);