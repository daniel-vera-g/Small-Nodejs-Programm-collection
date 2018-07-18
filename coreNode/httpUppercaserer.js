/**
 * Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.
 */
const http = require("http");
const fs = require("fs");
const map = require("through2-map");

const port = process.argv[2];

http.createServer((req, res) => {
	if (req.method == "POST") {
		// pipe the req to the map function
		req.pipe(map(chunk =>
		// convert chuk form repsonse to string and Upppercase
			chunk.toString().toUpperCase())).pipe(res);
	} else {
		return res.end("Send me a Post request\n");
	}
}).listen(port, () => {
	console.log(`Server started on Port ${port}`);
});
