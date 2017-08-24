const express = require('express');
const app = express();
const http = require('http').Server(app); //created a web framework. putting this on a server hosted inside of node. so i can put things on that server

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
})

http.listen(3001, function(){
	console.log("Listening on port 3001");
})

