/**
 * an Express.js server that processes PUT /message/:id requests
 * and produces a SHA-1 hash of the current date combined with the ID from the URL.
 */
const express = require("express");
const path = require('path');
const crypto = require('crypto');

const port = process.argv[2];
const app = express();

app.put('/message/:id', (req, res) => {
    // get the id
    let id = req.params.id;

    // create hash 
    let str = crypto.createHash("sha1").update(new Date().toDateString() + id).digest("hex");
    res.end(str);
})

app.listen(port);
