const express = require("express");
const path = require("path");
const fs = require("fs");
let index = 0;
let db = require("./db/db.json")


const app = express();
const port = process.env.PORT || 1701;
const mainDir = path.join(__dirname, "/public");

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/notes", function(req, res) {
    res.json(db)

});

app.post('/api/notes', function(req, res) {
    console.log(req.body)
    index++ 
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: index,
    }
    db.push(newNote)
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if(err) throw err
        res.json(db)

    })


});

app.delete('/api/notes/:id', function(req, res){
    console.log(req.params.id)
    let notesArray = JSON.parse(db)
    notesArray = notesArray.filter(trash => trash.id !== req.params.id) 
    console.log(notesArray)


})


app.get("/notes", function(req, res) {
    res.sendFile(path.join(mainDir, "notes.html"));
});


app.get("*", function(req, res) {
    res.sendFile(path.join(mainDir, "index.html"));
});




app.listen(port, function() {
    console.log(`Now listening to port ${port}. Have fun!`);
})