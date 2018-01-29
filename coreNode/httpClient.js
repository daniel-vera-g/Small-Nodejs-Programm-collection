/**
 * A program that performs an HTTP GET request to a URL provided to you as the first command-line argument.
  Write the String contents of each "data" event from the response to a new line on the console (stdout). 
 */

 var http = require('http');

//  set the standart input to the url
const url = process.argv[2];

/**
 * Make an http request to the server
 * @param  {} url The url to make the request 
 * @param  {} function
 */
let httpRequest = http.get(url, function(response){
    // change encoding to utfs8
    response.setEncoding('utf8');
    // log the data to the output 
    response.on('data', function(data){
        console.log(data);
    });
    // log errors
    response.on('error', function(error){
        console.log(error);
    })
})