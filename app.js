var express = require("express");
var server = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));             //converting to json.

var port = 3000;


server.use("/", (req, res) => {
    res.sendFile("H:/DSI pro's/reg from and review/DB/main.html");          //displaying html
    console.log("the html file has been sent..");
    
});

mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:3000/db");      //connecting to db

var nameSchema = new mongoose.Schema({                      //creating schema..
    Name: String,
    Email: String,
    github:String,
    phone: String
   });

var User = mongoose.model("User", nameSchema);

//server.post("/submit", (req, res) => {
//    console.log("Submitted form");
//    
//});


server.post("/submit", (req, res) => {
    var myData = new User(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });


server.listen(port, () => {
    console.log("Server listening on port " + port);
});



