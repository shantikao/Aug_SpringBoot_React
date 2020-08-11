// const events = require('events')
// const eventEmitter = new events.EventEmitter()

// const firstHandler = function doSomethingFirst() {
//     console.log('do something when first happen')
//     eventEmitter.emit('second')
//     eventEmitter.emit('third')
// }
// eventEmitter.on('first', firstHandler)
// eventEmitter.on('second', function(){
//     console.log('data received succesfully.');
// })


// eventEmitter.on('third', function(){
//     console.log('backup data complete, will proceed.');
// })

// // fire first event
// eventEmitter.emit('first')

const events = require('events')
const eventEmitter = new events.EventEmitter()

const firstHandler = function doSomethingFirst() {
    console.log('do something when first happen')
    eventEmitter.emit('second')
    eventEmitter.emit('third')
}
eventEmitter.on('first', firstHandler)
eventEmitter.on('second', function () {
    setTimeout(() => { console.log('data received suceessfully, will process') }, 2000)

})
eventEmitter.on('third', function () {
    setTimeout(() => { console.log('backup data complete, will proceed') }, 2000)

})
// fire first event
eventEmitter.emit('first')