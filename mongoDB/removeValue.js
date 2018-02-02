/**
 * Remove value in a collection.
 */
var MongoClient = require("mongodb").MongoClient;

//database name
const dbName = process.argv[2];
// collection name
const collectionName = process.argv[3];
// id to remove
const id = process.argv[4];
// url for the database
const url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
MongoClient.connect(url, (err, database) => {
  if (err) throw err;

  // get database
  var db = database.db(dbName);

  // get collection
  const collection = db.collection(collectionName);
  
  //   remove data from the collection 
  collection.remove({
      _id: id
  }, (err) => {
      if (er) throw err;
  })

  db.close();
});
