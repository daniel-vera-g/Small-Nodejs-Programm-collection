/**
 * Insert a document into the docs collection
 */
const MongoClient = require("mongodb").MongoClient;

// firstName for the document
const firstName = process.argv[2];
const lastName = process.argv[3];


// url for the database
const url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
MongoClient.connect(url, (err, database) => {
	if (err) throw err;

	// get database
	const db = database.db("learnyoumongo");

	// get collection
	const docs = db.collection("docs");

	//   json to send
	const doc = {
		firstName,
		lastName,
	};

	// insert data into the collection
	docs.insert(doc, (err, data) => {
		if (err) throw err;
		//   send json
		console.log(JSON.stringify(doc));
		// close db
		db.close();
	});
});
