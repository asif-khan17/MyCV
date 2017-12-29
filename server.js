'use strict';

var express = require('express');
var app = express();
var repository = require("./repository/user.repository");
var mysql = require('mysql');
var path = require('path');
var rootPath = path.normalize(__dirname);
var router = express.Router(); 
var bcrypt = require('bcrypt');
var https = require('https');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Promact2017",
  database:"Node",
  port:3306
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

bcrypt.hash('password', 5, function( err, bcryptedPassword) {
  console.log(bcryptedPassword);

bcrypt.compare('password', bcryptedPassword, function(err, doesMatch){
  if (doesMatch){
     //log him in
     console.log('match');
  }else{
     //go away
      console.log('no match');
  }
 });
});

// all of our routes will be prefixed with /api
app.use('/api', router);
var bodyParser = require('body-parser');


var apikey = 'd4735d3856a3322e23a3fdcdecd1cd12';
var city = 'India';
var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey;




var port = process.env.PORT || 8080; 
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(rootPath));
var request = require('request');
request(url, function (error, response, body) {
      var data = JSON.parse(body);// Print the google web page.
      console.log("longitude:"+ data.coord.lon + " latitude:" + data.coord.lat );
     
})


router.route('/user')
.get(function(req, res){
    res.json(repository());
});


app.listen(port);
console.log(new Date() + ' Listening on port: ' + port);
