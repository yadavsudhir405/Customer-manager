var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var serverConfig = require("./serverConfig");
 var t = require('./cutomerManger');
var url = "mongodb://"+serverConfig.servers.dbServers.mongo.userName+":"+serverConfig.servers.dbServers.mongo.password+"@"+serverConfig.servers.dbServers.mongo.url
console.log(url)
var config = require("./serverConfig");
var calculator = require("./demo").calculator
//Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    t.insertCustomer(db);
    console.log("Connected successfully to server");
    db.close();
});


