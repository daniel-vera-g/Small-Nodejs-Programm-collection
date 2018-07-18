const express = require("express");

const app = express();
const port = process.argv[2];

// static files
app.use(express.static(process.argv[3] || path.join(__dirname, "public")));

app.listen(port);
