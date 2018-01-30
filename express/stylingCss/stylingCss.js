const express = require("express");
const bodyparser = require('body-parser');
const stylus = require('stylus');

const port = process.argv[2];
const fileDirectory = process.argv[3];

const app = express();

// body parser
app.use(bodyparser.urlencoded({extended: false}));
// stylus
app.use(require("stylus").middleware(fileDirectory));
// static files
app.use(express.static(process.argv[3]));

app.listen(port);
