const express = require("express");
const app = express();
const pug = require('pug');
const port = process.argv[2];

// set templating engine
app.set('view engine', 'pug');
// set views
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
// routes for /home
app.get("/home", (req, res) => {
  res.render("index", { date: new Date().toDateString() });
});

app.listen(port);
