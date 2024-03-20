const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('digite um numero:', (numero1 ) =>{
    rl.question('digite outro numero:', (numero2)=>{
        rl.question('qual a operação?', (operação)=>{})
        
})
    if (numero1 + numero2){
        console.log(numero1 + numero2)
    } else if (numero1 - numero2) {
        console.log(numero1 - numero2)
    } else if (numero1 * numero2) {
        console.log(numero1 * numero2)
    } else {
        console.log(numero1 / numero2)
    }
        
        rl.close()
    })