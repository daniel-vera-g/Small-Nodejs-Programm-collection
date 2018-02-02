/**
 * Update a document into the docs collection.
 */
var MongoClient = require("mongodb").MongoClient;

//database name
const dbName = process.argv[2];

// url for the database
var url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
MongoClient.connect(url, (err, database) => {
  if (err) throw err;

  // get database
  var db = database.db(dbName);

  // get collection
  const users = db.collection("users");

  // update data in the users collection 
  users.update({ name: "Tina", username: "tinatime" }, { $set: { age: 40 } });
  db.close();
});
