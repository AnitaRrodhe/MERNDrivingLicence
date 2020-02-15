var express=require('express');
var app=express();
const bodyParser= require('body-parser')


app.get('/', function (req, res) {
   res.send('test');
})


app.listen(8081,()=>
{
	console.log("server is working");
})