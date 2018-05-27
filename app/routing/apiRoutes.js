(function() {
    var app = require("../../server.js");
    var path = require("path");
    function create_apiroutes(){
        var friends = require("../data/friends.js");
        app.get("/api/:friends?", function(req, res) {
            var chosen = req.params.friends;
            if (chosen) {
              for (var i = 0; i < friends.length; i++) {
                if (String(chosen).toLowerCase() === String(friends[i].name).toLowerCase()) {
                  return res.json(friends[i]);
                }
              }
              return res.json("name not found!");
            }
            return res.json(friends);
          });

        app.post("/api/friends", function(req, res) {
            var newcharacter = req.body;
            // newcharacter.name = newcharacter.name.replace(/\s+/g, "").toLowerCase();
            friends.push(newcharacter);
            res.json(newcharacter);
            
          });

    };
    module.exports.getapiRoutes = function() {
        return create_apiroutes();
    }
}());