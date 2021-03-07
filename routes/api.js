var notesData = require("../db/db.json");

module.exports = function (app) {

  //this gets all information from JSON db file 
  app.get("/api/notes", function (req, res) {
    res.json(notesData);
  });


  app.post("/api/notes", function (req, res) {


    let response = req.body;

    response.id = notesData.length.toString();

    notesData.push(response);
    res.json(response);
  })}