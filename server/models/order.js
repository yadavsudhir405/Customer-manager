var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
    product : {
        type : String, required: true, trim: true
    },
    price : {
        type : Number,
    },
    quantity : {
        type : Number,
    }
});
var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;