// DEPENDENCIES
var express = require("express");
var path = require("path");


// SETS UP EXPRESS
var app = express();
var PORT = process.env.PORT || 8080;

// EXPRESS DATA PARSING CAPABILITIES
app.use(express.static('app/public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// ROUTER
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// For serving of static CSS
app.use(express.static(__dirname + "/app/public/css"));
app.use(express.static(__dirname + "/app/public/images"));


// LISTENER
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
