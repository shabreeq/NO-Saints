var connection = require("./db/connection");
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/blog", function(req, res) {
  res.sendFile(path.join(__dirname, "blogTemplate.html"));
});

app.get("/blog/post", function(req, res) {
  connection.query("SELECT * FROM blogs", function(err, WhoDat_DB) {
    res.json(WhoDat_DB);
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});