/**
 * Count number of documents with a certain criteria
 */
const MongoClient = require("mongodb").MongoClient;

// number to compare
const number = process.argv[2];
// database name
const dbName = "learnyoumongo";
// collection name
const collectionName = "parrots";

// url for the database
const url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
MongoClient.connect(url, (err, database) => {
	if (err) throw err;

	// get database
	const db = database.db(dbName);

	// get collection
	const parrots = db.collection(collectionName);

	//   count data with certain criteria
	parrots.count({
		age: { $gt: +number },
	}, (err, count) => {
		if (err) throw err;
		console.log(count);
		db.close();
	});
});
