/*const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

//solicitando ao usuario que insira sua idade
rl.question('Qual sua idade?', (idade) => {
    //exibindo a idade inserida pelo usuario
    console.log('Sua idade é', idade)
//feichando a interface de leitura
    rl.close()
})
*/
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('digite o primeiro numero:', (numero1) =>{
    rl.question('digite o segundo numero:', (numero2) => {
        const resultado = Number(numero1) + Number(numero2)
        console.log('a soma de ',numero1, 'e',numero2, 'é', resultado)
        rl.close()
    })
})


rl.question('digite o primeiro numero:', (numero1) =>{
    rl.question('digite o primeiro numero:', (numero1) =>{
        rl.question('digite o primeiro numero:', (numero1) =>{
            
        })
    })
})