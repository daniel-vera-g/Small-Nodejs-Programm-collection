/**
 * Write an HTTP server that serves the same text file for each request it  
  receives.
 */
const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const filePath = process.argv[3];

http.createServer(function(req, res){
    fs.createReadStream(filePath).pipe(res);
}).listen(port, () => {
    console.log('Server started on Port ' + port);
})

