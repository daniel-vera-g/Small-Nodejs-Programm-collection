/**
 * a server that, when it receives a GET, reads a file, parses it to JSON,
and responds with that content to the user.
 */
const express = require('express');
const fs = require('fs');

const app = express();
const port = Number(process.argv[2]);
const file = process.argv[3];

// get req handler
app.get('/books', (req, res) => {
    // read the file
    let object;
    fs.readFile(file, (err, data) => {
        if (err) {
            throw err;
        }try {
               object = JSON.parse(data.toString());
               // send it back to the client
               res.json(object);
             } catch (error) {
            throw error;
        }
    })
})

    


try{
  app.listen(port);
} catch(err){
 5
  console.error(err.message);
}