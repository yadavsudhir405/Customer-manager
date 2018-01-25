var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
// var t = require('./cutomerManger');
var url = 'mongodb://localhost:27017/demo';
var calculator = require("./demo").calculator
// Use connect method to connect to the server
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     t.insertCustomer(db);
//     console.log(t.myShirts().color);
//     db.close();
// });
calculator.add(10,10);
calculator.sub(100,50);
