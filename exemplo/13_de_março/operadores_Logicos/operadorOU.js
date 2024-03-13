//operador (OU) ||
//retorna false se, e somente se , todos booleanos envolvidos tambem forem false

true || true //true
false || true //true
true || false //true
false || false //false

let a = true
let b = false
let c = false

console.log(a || b) //true
console.log(b || c) //false
console.log(a || c) //true
console.log(a || b || c) //true