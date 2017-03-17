// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app, express) {
    // HTML GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases the user is shown an HTML page of content
    // ---------------------------------------------------------------------------


    // ROOT route
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    // SURVEY route
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // RESULTS route
    app.get("/results", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/results.html"));
    });


    app.use(function(req, res) {
        res.send("<h1> 404 ERROR </h1> <h3> The page you are looking for is not at this location</h3>");
    });
    // If no matching route is found default to 404 error

};
