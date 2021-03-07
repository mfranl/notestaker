//putting all html routs into one file 
//this is the url path
const path = require("path");

module.exports = function(app) {

  //creating the url for the specific html
  //top line is the route and the second like is where the file is 
  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/assets/js/index.js", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/js/index.js"));
  });

  
  //re-routes to home page 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};