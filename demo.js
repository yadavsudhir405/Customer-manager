var op1 = function (a,b) {
    console.log(a+b);
}
var op2 = function (a,b) {
    console.log(a-b);
}
var c = {
    add:op1,
    sub:op2
}

exports.calculator = c;