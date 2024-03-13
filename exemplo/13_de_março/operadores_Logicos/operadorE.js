//operador E (AND) &&
//retorna true se, e somente se, os todos booleans envolvidos tambem forem true

true && true //true
false && true //false
true && false //false
false && false //false

let var1 = 50
let var2 = 50
let var3 =25

console.log(var1 === var2 && var1 > var3) //true
//true && true


let a = true
let b = false
let c = true

console.log(a && b) //false
console.log(b && c) //false
console.log(a && c) //true
console.log(a && b && c) //false