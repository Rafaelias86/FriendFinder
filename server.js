// DEPENDENCIES
var express = require("express");
var path = require("path");


// SETS UP EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;

// // For serving of static CSS
// app.use(express.static(__dirname + "/app/public/css"));

// EXPRESS DATA PARSING 
app.use(express.static('app/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// For serving of static CSS
app.use(express.static(__dirname + "/app/public/css"));

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});