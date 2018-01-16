/* prints a list of files in a given directory,
filtered by the extension of the files
.You will be provided a directory name as the first argument to your program(e.g. '/path/to/dir/') and a
file extension to filter by as the second argument.
second argument will not come prefixed with a '.'.
 */

const fs = require('fs');
const path = require('path');
var getFiles = require('./readFilter.js');