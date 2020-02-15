const express=require('express');
const app=express();
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27042/driver-license-db',function (err, client){
	if (err) throw err

	var db = client.db('driver-license-db') 

	db.collection('test').find().toArray(function (err, result){
		if (err) throw err
		
		console.log(result)
	})
})


app.get('/', function (req, res) {
	res.send('test');
})


app.listen(8081,()=>
{
	console.log("server is working");
})