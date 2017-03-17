// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var friendsData = require("../data/friends.js");
var userData = require("../data/user.js");




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------


    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
        console.log(friendsData);
    });

    app.get("/api/user", function(req, res) {
        res.json(userData);
        console.log(userData);
    });




    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // ---------------------------------------------------------------------------

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
        res.json(friendsData);
    });

    app.post("/api/user", function(req, res) {
        userData.push(req.body);
        res.json(userData);
    });
};
