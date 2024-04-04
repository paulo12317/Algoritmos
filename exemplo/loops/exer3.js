const readlineSync = require('readline-sync');
let num1 
let num2 
let num3
while (num1 !=0  && num2 !=0){

num3 = readlineSync.question("fale um numero: ")
num1 = readlineSync.question("fale um numero: ")
num2 = readlineSync.question("fale outro numero: ")



}
console.log(Number(num1) + Number(num3))