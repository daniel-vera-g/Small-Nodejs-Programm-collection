const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({ extended: false }));

const port = process.argv[2];

app.post("/form", (req, res) => {
	const responseValue = req.body.str.split("").reverse().join("");
	res.end(responseValue);
});

app.listen(port);
