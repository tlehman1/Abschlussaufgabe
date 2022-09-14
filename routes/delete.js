var express = require('express');
var router = express.Router();
const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017' // connection URL
const client = new MongoClient(url) // mongodb client
const dbName = 'mydatabase1' // database name
const collectionName = 'newpois2' // collection name



/* GET delete page. */
router.get('/', function(req, res, next) 
{

  getPOIs(client, dbName, collectionName, req)
  res.render('delete', { title: 'Delete Page',elements: finalString});

});

async function getPOIs(client, dbName, collectionName, req) {
  var finalString = "";
  await client.connect()

  console.log('Connected successfully to server')

  const db = client.db(dbName)

  const collection = db.collection(collectionName)

  const cursor =  collection.find({})
   
  const results = await cursor.toArray()
  console.log(results[0])
  
  for(var i = 0; i < results.length; i++) {
    finalString = finalString + " " + results[i].properties.name + " " + results[i].geometry.coordinates + "          "
  }
  

  console.log(finalString);
  //collection.deleteOne(poi) // see https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
  //console.log(`Poi ${poi.poiname} deleted from the database`);
}


router.post('/deletedPoi', function(req, res, next) {
  let poi = {}
  poi.properties.name = req.body.poiname

  console.log(poi)

  deleteNewPOItoDB(client, dbName,collectionName, poi, res)
})




async function deleteNewPOItoDB(client, dbName, collectionName, poi, res) 
{

  await client.connect()

  console.log('Connected successfully to server')

  const db = client.db(dbName)

  const collection = db.collection(collectionName)
  


  collection.deleteOne(poi) // see https://www.mongodb.com/docs/drivers/node/current/usage-examples/insertOne/
  console.log(`Poi ${poi.properties.name} deleted from the database`);
 
  // pass the data added as input for the notification page
  res.render('delete_notification', {title: "Delete Completed", newpoi: poi, data: []})


}


module.exports = router;