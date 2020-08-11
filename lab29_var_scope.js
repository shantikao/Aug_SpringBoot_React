var var3 = 5
function foo() {
    console.log('var1=', var1)
    console.log('var3=', var3)
    var var1 = 300;
    var2 = 400;
    var var3 = 500;
    if(var1 >100){
        var var3 = 800;   //same var3=800
        console.log("inside if, var3 = ",var3)
    }
    console.log('var1=', var1, 'var2=', var2, 'var3=', var3)
}
//console.log('var1 outside=', var1)
//console.log('var1 outside=', var2)
foo()
console.log('after run foo, var2 outside=', var2) //沒加var, default global
//console.log('after run foo, var2 outside=', var1)  var1 因為加了var只能在宣告的scope內用。

console.log('after run foo, var3 outside=', var3) 