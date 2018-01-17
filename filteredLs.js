/* prints a list of files in a given directory,
filtered by the extension of the files
.You will be provided a directory name as the first argument to your program(e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.
second argument will not come prefixed with a '.'.
 */

const fs = require('fs');
const path = require('path');

//get the path to the directory and the extension of the file
const pathToDir = process.argv[2];
const extension = process.argv[3];

/* 
Get Files from directory that have extension
@param Path to the directory
@param extension
@param callback function
 */
var getFiles = function (dir, ext, callback ) {
    //  use the readdir function to the the right files
    fs.readdir(dir, function (err, list) {
        if (err) return console.log(err);
    
        // use the filter function to extract the right files
        list = list.filter(function(file){
             return path.extname(file) == '.' + ext;
            })
        // call the callback function when the list is sorted
        callback(null, list);
    })
}

/*
Function call to get the files with the respectively extension
 */
getFiles(pathToDir, extension, function(err, list){
    if (err) console.log(err);
    
    // loop through the results of the function
    list.forEach(function(file){
        console.log(file);
    });
});