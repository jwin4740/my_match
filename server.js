// ==============================================================================
// DEPENDENCIES
// 
// ==============================================================================

var express = require("express");
var bodyParser = require("body-parser");

var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;


// BodyParser makes it possible for our server to interpret data sent to it.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// allows use of static files in the public folder
app.use(express.static(path.join(__dirname, "./public")));




// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app, express);



// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
