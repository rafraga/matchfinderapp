(function() {
    var app = require("../../server.js");
    var friends = require("../../app/data/friends.js");
    var path = require("path");
    function create_htmlroutes(){
        app.get("/survey", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/survey.html"));
          });
        app.get("/", function(req, res) {
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });  
        app.get("/all", function(req, res) {
            res.json(friends);
        });
    };
    module.exports.gethtmlRoutes = function() {
        return create_htmlroutes();
    }
}());