/**
 * Calculate the average price of all documents
 * rounded up to 2 decimal places
 */
const MongoClient = require("mongodb").MongoClient;

// size to calculate the average from
const number = process.argv[2];
// collection name
const collectionName = "prices";

// url for the database
const url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
MongoClient.connect(url, (err, database) => {
	if (err) throw err;

	// get database
	const db = database.db("learnyoumongo");

	// get collection
	const prices = db.collection(collectionName);

	//   get the average prices
	prices
		.aggregate([
			{
				$match: { size: number },
			},
			{
				$group: {
					_id: "average",
					average: {
						// average size
						$avg: "$price",
					},
				},
			},
		])
		.toArray((err, results) => {
			if (err) throw err;

			// informations about the result
			const information = results[0];
			// get average number from object
			const averageNumber = information.average;

			// round up to 2 decimal places
			console.log(Number(averageNumber).toFixed(2));
			db.close();
		});
});
