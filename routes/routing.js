var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb')

const url = "mongodb://localhost:27017"; // connection URL
const client = new MongoClient(url); // mongodb client
const dbName = "mydatabase1"; // database name
const collectionName = "newpois2"; // collection nam

/* GET users listing. */
router.get("/", function (req, res, next) {
  // connect to the mongodb database and retrieve all docs
  client.connect(function (err) {

    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    //Finden aller Punkte
    collection.find({}).toArray(function (err, docs) {
      //Übergeben der geojson an die pug Datei
      res.render("routing", { title: "Route zu Gebirgen", data: docs });
    });
  });
});

module.exports = router;
