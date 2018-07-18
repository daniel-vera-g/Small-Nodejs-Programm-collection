// get the path to the directory and the extension of the file
const pathToDir = process.argv[2];
const extension = process.argv[3];
const getFiles = require("./module");

/*
Function call to get the files with the respectively extension
 */
getFiles(pathToDir, extension, (err, list) => {
	if (err) return console.log(err);

	// loop through the results of the function
	list.forEach((file) => {
		console.log(file);
	});
});
