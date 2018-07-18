

/* An HTTP server that serves JSON data when it receives a GET request
to the path '/api/parsetime'
*/
const http = require("http");
const url = require("url");

const port = process.argv[2];

/**
 * Function to get an object with the required information
 * @param  {string} isoT Time in the ISO standart
 * @return Obeject with the Informations to send
 */
const isoTime = (isoT) => {
	const d = new Date(isoT);
	// object to return
	return {
		hour: d.getHours(),
		minute: d.getMinutes(),
		second: d.getSeconds(),
	};
};

/**
 * function to get unix time in ml
 * @param  {string} isoT String with the time to convert
 * @return {Stirng} Unix Time in ml
 */
const unixTime = (isoT) => {
	const d = new Date(isoT);
	// unix time in ml
	const unixTime = d.getTime();
	// object to return
	return { unixtime: unixTime };
};

// function to parse query
const parseTime = (url) => {
	// check if request is unix or isoTime
	switch (url.pathname) {
	case "/api/parsetime":
		return isoTime(url.query.iso);
	case "/api/unixtime":
		return unixTime(url.query.iso);
	default:
		"Send me a valid endport URL";
	}
};


/**
 * Server Instance
 */
http.createServer((req, res) => {
	// check if there is a post request
	if (req.method == "GET") {
		res.writeHead(200, { "Content-Type": "application/json" });
		// parse the incoming URL into an object
		const reqUrl = url.parse(req.url, true);
		// send a response with the date
		res.end(JSON.stringify(parseTime(reqUrl)));
	} else {
		res.writeHead("405");
		res.end();
	}
}).listen(port, () => {
	console.log(`Server started on Port ${port}`);
});
