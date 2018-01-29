/* prints a list of files in a given directory,
filtered by the extension of the files
.You will be provided a directory name as the first argument to your program(e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.
second argument will not come prefixed with a '.'.
 */

const fs = require("fs");
const path = require("path");
//const ex = module.exports;

/** 
Get Files from directory that have extension
@param Path to the directory
@param extension
@param callback function
 */
module.exports = function(dir, ext, callback) {
  //  use the readdir function to the the right files
  fs.readdir(dir, function(err, list) {
      //if error run the callback with the error
    if (err) return  callback(err);

    // use the filter function to extract the right files
    list = list.filter(function(file) {
      return path.extname(file) == "." + ext;
    });
    // call the callback function when the list is sorted
    callback(null, list);
  });
};
