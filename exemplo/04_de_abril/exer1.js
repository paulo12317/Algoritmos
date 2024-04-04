//1)
const readlineSync = require('readline-sync');

const num1 = readlineSync.question("fale um numero: ")
const num2 = readlineSync.question("fale outro numero: ")
if(  num1 >= 0 && num2 >= 0){
    console.log(Number(num1) + Number(num2))
} else {
    console.log('um desses numeros é negativo')
}

//2)

const num = readlineSync.question("fale um numero: ")
const num3 = readlineSync.question("fale outro numero: ")
if (num % 2 == 0 || num3 % 2 ==0){
    console.log(num * num3)
} else {
    console.log('os dois numeros sao impares')
}

//3)

const num0 = readlineSync.question("fale um numero: ")
const num4 = readlineSync.question("fale outro numero: ")

if (num4 != 0){
    console.log(num0 / num4)
} else {
    console.log('o divisor é 0')
}

//4)

let array = [1,2,3,4]
console.log(array[2],array[1],array[0])

//5)
array.pop()
array.splice(0,1)
console.log(array)

//6)


let string = 'paulo'









