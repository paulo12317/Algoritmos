//arrays servem para fazer lista

let lista =['pirlo','leo','gabriel']
let listaNum = [1,2,3,4,5,6,7,]
let segundoItem = lista[2] //leo
console.log(segundoItem)


let pokemon = ['bulbasauro','squirtle','charmander']
console.log(pokemon.length) //3


let series = ['flash', 'round six']
series.includes('flash') //true
series.includes('peppa') //false
console.log(series.includes('flash'),series.includes('peppa'))

//adiciona um numero ou palavra ao array

const numeros = [1,2,3]
numeros.push(4)
console.log(numeros) // [1 2 3 4]
numeros.push(5,6,7,8)
console.log(numeros) // [1 2 3 4 5 6 7 8]

//tira o ultimo item da lista

let peixes = ['palhaço','mandarim','esturjão']

peixes.pop()
console.log(peixes) //palhaço, mandarim

let letras = ['a','b','c','d','e','f','g','h']
// indices (i)0   1   2   3   4   5   6   7

letras.splice(2,1)
//  letras = ['a','b','d','e','f','g','h']
// indices (i) 0   1   2   3   4   5   6

letras.splice(3,2) //  letras = ['a','b','d','g','h']





