
var array1 = new Array()
array1.push('Apple')  //0
array1.push('Banana')//1
array1[3]='Donut'//3
console.log(array1)
array1.push('Eary Gray Tea')
console.log(array1)
delete array1[3]
console.log("@@"+array1)
array1[2]='cookie'
array1[3]='donut'
console.log("@##"+array1)