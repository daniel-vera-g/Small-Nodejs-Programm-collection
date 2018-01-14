// Instead of fs.readFileSync() you will want to use fs.readFile() and
// instead of using the return value of this method you need to collect the
// value from a callback function that you pass in as the second argument.To
// learn more about callbacks, check out:
// (https://github.com/maxogden/art-of-node#callbacks).  

//     Remember that idiomatic Node.js callbacks normally have the signature:

//         function callback(err, data) { /* ... */ }  
   
//   so you can check if an error occurred by checking whether the first
// argument is truthy.If there is no error, you should have your Buffer
// object as the second argument.As with readFileSync(), you can supply
// 'utf8' as the second argument and put the callback as the third argument
// and you will get a String instead of a Buffer.
var fs = require('fs');

//read file
var numberNewlines = fs.readFile(process.argv[2], 'utf8', function(err, data){
    if (err) {
        console.log(err);
    }
    let lines = data.split('\n').length-1;
    console.log(lines);
    
});
