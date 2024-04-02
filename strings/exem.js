//CONTATENAÇÃO

let nome = 'pirlo'
let idade = 103
const frase = 'meu nome é ' + nome + ' e tenho ' + idade + ' anos' 

let nome1 = 'PAU'
let sobre = 'LO'
let nomeCompleto = (nome1 + sobre)
console.log(nomeCompleto)
//console.log(frase)
console.log(`Meu nome é ${nome}, eu tenho ${idade} anos.`)

let nomeSobre = 'Paulo Henrique Vicente Friedrich'
console.log(nomeSobre.length) //conta o tamanho da frase
let frase1 = 'SALVE gurizes'
console.log(frase1.toLowerCase()) //transforma a frase em minuscula
console.log(frase1.toUpperCase()) //transforma a frase em maiuscula

let email = ' pirlo1217@gmail.com '
console.log(email.trim()) //tira os espaços do inicio e do fim da frasea

const frase2 = 'hoje comi cenoura'

console.log(frase2.includes('cenoura'))
console.log(frase2.includes('Jair bolsonaro'))

const frase3 = 'hoje comi tomate, adoro tomate'
const novaFrase = frase3.replaceAll('tomate','alface')
console.log(novaFrase)


