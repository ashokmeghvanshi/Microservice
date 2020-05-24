const express = require('express');
const app = express();
const jwt     = require('jsonwebtoken');
const key = require('./password');
const fs = require('fs');
const jsonpatch = require('jsonpatch');
const middlewares = require('./middlewares');
app.use('/images', express.static('images'));
app.set('view engine', 'ejs');


app.get('/login',(req,res)=>{
	const user = req.query;
	let token = jwt.sign(user, key.secret);
	localStorage.setItem("jwttoken", token);
	res.json(token);

});

app.get('/image',middlewares.validity,middlewares.ThumbnailCreation,(req,res)=>{
	res.send("Successfully Downloaded Your File and Thumbnail Is Also Created");
	
});

app.get('*', function(req, res){
  res.render('error');
});

app.listen(3000,()=>{
	console.log("app running on port 3000");

});