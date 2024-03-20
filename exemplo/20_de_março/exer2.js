const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('digite um numero?', (numero1) =>{
    if (numero1 < 0){
        console.log('seu numero é negativo')
    } else if (numero1 > 0) {
        console.log('seu numero é positivo')
    } else {
        console.log('seu numero é igual 0')
    }
        
        rl.close()
    })