const readlineSync = require('readline-sync')
let maior = 0
let menor = 99999999999999999999999999999999999999999999
for(let i = 0; i < 10; i++){
const num = Number(readlineSync.question('Qual seu numero: '))
if(num > maior){
    maior = num
}
if(num < menor){
    menor = num
}
}
console.log("o menor é ", menor,"e o maior é ", maior)