/*
let num1 = 3 //cria uma varivel com um numero
let num2 = 9 //cria outra variavel com um numero
console.log(num1 / num2) //divide os numeros inseridos nas variaveis
*/
/*
let num1 = 5 //cria uma varivel com um numero
let num2 = 10 //cria outra variavel com um numero
let operação = '/' // cria uma variavel com a operação da conta

function calculadora() {
    if (operação == '/'){ //faz uma fução com if else para saber qual operação fazer
        console.log(num1 / num2)
    } else if (operação == '+'){
        console.log(num1 + num2)
    } else if (operação == '-'){
        console.log(num1 - num2)
    } else {
        console.log(num1 * num2)
    }
}
*//*
let nota1 = 10 //cria uma varivel com uma nota
let nota2 = 20 //cria outra varivel com uma nota
let nota3 = 30 //cria outra varivel com uma nota
console.log((nota1 + nota2 + nota3) /3) //calcula a media das notas
*/
/*
function areaRetangulo(altura,largura) { //cria uma função que calcula o retangulo
    let resultado = altura * largura // faz a multiplicação de altura e largura
    return resultado //retorna o resultado
}
areaRetangulo(5,10)
*/

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







