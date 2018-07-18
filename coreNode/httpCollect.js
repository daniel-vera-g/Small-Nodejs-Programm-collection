/**
 * A Programm that:
 * Makes a HTTP Get request
 * Logs the number of Characters received
 * Logs complete String of Characters
 * */

const http = require("http");
const concat = require("concat-stream");

const url = process.argv[2];
let text = "";
let stringLength;

/**
  * Make Http request
  * @param  {} url
  * @param  {} function(res
  */
http.get(url, (res) => {
	//  set encoding to utf8
	res.setEncoding("utf8");

	//  put each part of data we get to the text obeject
	res.on("data", (data) => {
		text += data;
	});

	// do this when response has ended
	res.on("end", () => {
		// length of the string of data we get
		stringLength = text.length;
		console.log(stringLength);
		console.log(text);
	});

	// do this when an error occurs
	res.on("error", (error) => {
		console.log(error);
	});
});
