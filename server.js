var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
module.exports = app;
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var friends = require("./app/data/friends.js");

var html_routes = require("./app/routing/htmlRoutes.js");
html_routes.gethtmlRoutes();

var api_routes = require("./app/routing/apiRoutes.js");
api_routes.getapiRoutes()

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
