'use strict';

var express = require('express');
var app = express();
var repository = require("./repository/user.repository");

var path = require('path');
var rootPath = path.normalize(__dirname);
var router = express.Router(); 

// all of our routes will be prefixed with /api
app.use('/api', router);
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080; 
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(rootPath));


router.route('/user')
.get(function(req, res){
    res.json(repository());
});

app.listen(port);
console.log(new Date() + ' Listening on port: ' + port);