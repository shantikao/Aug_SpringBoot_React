
var x1 = "Foo,foo".replace(/[Ff]/g, 'q')
console.log(x1)
var x2 = "Foo,foo".replace(/f/g, 'q')
console.log(x2)
var x3 = "Foo, foo, Ffoo".replace(new RegExp("[Ff]","g"),'q')
console.log(x3) 