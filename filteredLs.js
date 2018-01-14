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

//read the file of the directory and save the save the in the callback function
fs.readdir(pathToDir, function (err, list) {
    // loop through each file in the folder and check if the extension match with the provided one
    list.forEach(function (file){
        if (path.extname(file) === '.' + extension) {
            console.log(file);
        }
    })

})