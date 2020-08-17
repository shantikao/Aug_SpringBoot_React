
let x = 5
console.log(x)
x += 1
console.log(x)

const y = `hello world, actually x=${x}`
console.log(y)
const z = `hihi, x=${x}`
console.log(z)


//npx babel src\lab1_var_let_const.js
//npx babel src\lab1_var_let_const.js --out-file out\lab1_var_let_const.js  把babel轉過的版本放在out下
//node out\lab1_var_let_const.js
//node src\lab1_var_let_const.js