const express = require('express'); 			//what does require do? importing other code that you want to incorporate into your program
const app = express();							//create const for express that can be used
const http = require('http').Server(app);		//pre code instead of installing packages

app.use(express.static(__dirname + '/public'));	//folder access

app.get('/', function(req,res){					//req and res can be named anything, but they will always do the same jobs which are request and response
	res.sendFile(__dirname + '/index.html'); 	//append dirname to html and building a path with /something.html
}) 

http.listen(3000, function(){					//
	console.log('Listening on 3000');			//
})