var mongo = require("mongodb").MongoClient;

// age to filter
var age = process.argv[2];

// url for request
var url = "mongodb://localhost:27017/learnyoumongo";

// connect to database
mongo.connect(url, (err, database) => {
                                        if (err) throw err;

                                        // get database
                                        var db = database.db("learnyoumongo");

                                        // get collection
                                        let parrots = db.collection("parrots");

                                        // find values that where age is bigger than the requiredd age
                                        parrots
                                          .find(
                                            {
                                              age: {
                                                $gt: +age
                                              }
                                            }
                                          )
                                          .toArray(
                                            (
                                              err,
                                              docs
                                            ) => {
                                              if (
                                                err
                                              )
                                                throw err;
                                              console.log(
                                                docs
                                              );
                                              database.close();
                                            }
                                          );
                                      });