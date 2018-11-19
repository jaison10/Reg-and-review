var express = require("express");
var server = express();
var mongoose = require("mongoose");
var bodyParser = require('body-parser');

var MongoClient = require('mongodb').MongoClient;
var db;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));             //converting to json.

var port = 27017;


server.use("/", (req, res) => {
    res.sendFile("H:/DSI pro's/reg from and review/DB/main.html");          //displaying html
    console.log("the html file has been sent..");
});

//mongoose.Promise = global.Promise;mongoose.connect("mongodb://localhost:27017/database");      //connecting to db
//mongoose.Promise = global.Promise;mongoose.connect('mongodb://localhost:3000/db', { useNewUrlParser: true });
//mongoose.Promise = global.Promise;MongoClient.connect("mongodb://localhost:3000/db", {useNewUrlParser: true } );



db.mongoConnect = () => {
    mongoose.Promise = global.Promise
    mongoose.connect("mongodb://localhost:27017/database", {useNewUrlParser: true})
    mongo.then(() => {
    console.log('mongoDB is connected...');
    })
    .catch((err) => {
    throw err
    })
    }



// // Initialize connection once
// MongoClient.connect("mongodb://localhost:27017/db", { useNewUrlParser: true }) 
//   db = database;
//   console.log("connected to db");
  
// MongoClient.connect("mongodb://localhost:27017/database",{ useNewUrlParser: true },function(err,db){
//     if(err){
//         console.log("Couldn't connect" +err);
//     }
//     else {
//         console.log('connected to '+ url);
//         database.close();
//     }
//   })


var nameSchema = new mongoose.Schema({                      //creating schema..
    Name: String,
    Email: String,
    github:String,
    phone: String
   });

var User = mongoose.model("User", nameSchema);

server.post("/submit", (req, res) => {
   console.log("Submitted form");
   
});


// server.post("/submit", (req, res) => {
//     var myData = new User(req.body);
//     myData.save()
//     .then(item => {
//     res.send("item saved to database");
//     console.log("DATA STORED ");
//     })
//     .catch(err => {
//     res.status(400).send("unable to save to database");
//     });
//    });


server.listen(port, () => {
    console.log("Server listening on port " + port);
});



