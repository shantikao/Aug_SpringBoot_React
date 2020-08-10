const { SSL_OP_NO_TLSv1_1 } = require("constants")

function func1(a, b) {
    return a * b
}
var x1 = function (a, b) {
    return a * b
}
var x2 = (a, b) => { return a * b }
console.log(func1(5, 6), x1(7, 8), x2(9, 10))
var token = 'abc'
var y1 = function () {
    var token = 'def'
    console.log("under y1:", token)
}
y1()
console.log("upper level", token)