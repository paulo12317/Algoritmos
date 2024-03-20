senha = 123
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual a senha?', (senha) =>{
    if (senha == 123){
        console.log('Login bem-sucedido') 
    } else {
        console.log('senha incorreta')
    }
        
        rl.close()
    })