/**
  * process the data from the URL query string (urlencoded).
  */
const express = require("express");

const app = express();
const port = Number(process.argv[2]);

// get req handler
app.get("/search", (req, res) => {
	const object = req.query;
	// send object
	res.send(object);
});

try {
	app.listen(port);
} catch (err) {
	console.error(err.message);
}
