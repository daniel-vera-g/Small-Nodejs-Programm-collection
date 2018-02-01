// const mongo = require('mongodb').MongoClient;

// // age to filter
// const reqAge = parseInt(process.argv[2]);

// // connect to database
// mongo.connect('mongodb://localhost:27017/learnyoumongo', (err, database) => {
//     if (err) throw err;
//     // get collection
//     let parrots = database.collection('parrots');
//     // find values that where age is bigger than the requiredd age
//     parrots.find({
//         age: {
//             $gt: +reqAge
//         }
//     }).toArray((err, docs) => {
//         if (err) throw err;
//         console.log(docs);
//         database.close();
//     })
// })

var mongo = require("mongodb").MongoClient;
var age = process.argv[2];

var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, function(err, database) {
  if (err) throw err;
  var myDb = database.db("learnyoumongo");
  let parrots = myDb.collection('parrots');
  parrots.find({
      age: {
        $gt: +age
      }
    })
    .toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
      db.close();
    });
});