const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual sua idade?', (numero1) =>{
    if (numero1 >= 18){
        console.log('voce é maior de idade')
    } else {
        console.log('voce não é maior de idade')
    }
        
        rl.close()
    })
