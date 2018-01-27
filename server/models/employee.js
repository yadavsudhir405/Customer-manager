var mongoose = require('mongoose')
    , Schema = mongoose.Schema;
var EmployeeSchema = new Schema({
    name : {
        type:String, required : true
    },
    email : {
        type: String, required : true
    },
    gender : {
        type: String, required : true
    },
    dob : {
        type: Date, required : true
    },
    city : {
        type: String, required : true
    }
});

var Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;