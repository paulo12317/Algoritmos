function exer3(num){
    if ((num %2 == 0)){
        console.log('seu numero é par')
    } else {
        console.log('seu numero é impar')
    }
}
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('digite um numero:', (num1) => {
    exer3(num1)

    rl.close()
})
 

