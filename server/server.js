const Hurma = require('./test.model');

const express=require('express');
const app=express();
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const link = "mongodb://127.0.0.1:27042/driver-license-db";

mongoose.connect(link);

var connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {

connection.db.collection("test", function(err, collection){
        collection.find({}).toArray(function(err, data){
            console.log(data);
})
    });

});

app.get('/', function (req, res) {

	Hurma.find({}, function(err,docs) {
		console.log(docs);
		res.send(docs);
	});	
})


app.listen(8081,()=>
{
	console.log("server is working");
})