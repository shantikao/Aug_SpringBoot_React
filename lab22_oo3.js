function Car() {
}
Car.prototype.speed = 0
Car.prototype.limit = 9999
Car.prototype.getSpeed = function () {
    return Car.prototype.speed
}
Car.prototype.setSpeed = function(speed){
    Car.prototype.speed = speed
}
function HybridCar() {

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batteryLimit = 50000

var myCar = new HybridCar()
console.log(myCar.getSpeed())
myCar.setSpeed(50)
console.log(myCar.getSpeed())
console.log(myCar.batteryLimit)
console.log(myCar.limit)