/**
 * Same code as in Programm one, with the exception that only the name and age is logged
 */
const MongoClient = require("mongodb").MongoClient;

// age to filter
const age = process.argv[2];

// url for request
const url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
MongoClient.connect(url, (err, database) => {
	if (err) throw err;

	// get database
	const db = database.db("learnyoumongo");

	// get collection
	const parrots = db.collection("parrots");

	// find values that where age is bigger than the requiredd age
	parrots.find(
		{
			age: { $gt: +age },
		},
		{ _id: 0, name: 1, age: 1 },
	).toArray((err, docs) => {
		if (err) throw err;
		console.log(docs);
		database.close();
	});
});
