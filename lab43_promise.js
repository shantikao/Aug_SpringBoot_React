// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("no error")
//         resolve(100)
//     }, 2000)
// })
// console.log("program started")
// promise.then(result => console.log("OK, result=" + result))
// console.log("program ended")


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("OOPS!!!")
            console.log("no error")
            resolve(100)
        } catch (e) {
            reject(e)
        }

    }, 2000)
})
console.log("program started")
promise.then(result => console.log("OK, result=" + result))
    .catch(error => console.log("Found exception:" + error))
console.log("program ended")