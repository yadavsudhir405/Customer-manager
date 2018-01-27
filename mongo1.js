var mongoose = require('mongoose');
var dbToUse="mongodb://demo:demo@localhost:27017/demo",
 Schema = mongoose.Schema
    , ObjectId = Schema.ObjectId;
var Order = require("./server/models/order");
var Employee = require("./server/models/employee")

mongoose.connect(dbToUse);
// Check connection to mongoDB
mongoose.connection.on('open', function () {
    console.log('We have connected to mongodb');
});

var e = new Employee();
e.name = "Sudhir";
e.email = "afdasd@gmail.com";
e.gender = "Male";
e.dob = new Date();
e.city = "Bangalaore";
e.save(function (error, employee) {
    console.log("Employee got saved");
    console.log(error);
});
// var OrderSchema = new Schema({
//     product : {
//         type : String, required: true, trim: true
//     },
//     price : {
//         type : Number,
//     },
//     quantity : {
//         type : Number,
//     }
// });




//var Order = mongoose.model('Order', OrderSchema);

// var t = new Order();
// t.product="Laptop";
// t.price=100;
// t.quantity=100;
// t.save(function (err,order) {
//     console.log("Saved");
//     console.log(order);
// });
// Order.find({},{'product':1}).exec(function (error,orders) {
//     console.log("********");
//     console.log(orders);
// });
