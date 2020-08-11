
function Car() {
    this.speed = 0
    this.getSpeed = function () {
        return this.speed
    }
}
var myCarRun = function(){
    console.log("super fast");
}
myCarRun()
var myCar = new Car()
console.log(myCar.getSpeed())
myCar.speed=50
console.log(myCar.getSpeed())


