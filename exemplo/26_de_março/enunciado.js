/*function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

/*a) O que vai ser impresso no console? Vai imprimir 10 e 50

b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console? iria imprimir 10 e 50 tambem
*/
/*
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)
*/
/*a. Explique o que essa função faz e qual é sua utilidade? ele vai transformar todas as letras em minusculas e verificar se esta incluso a palavra cenoura

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`  -- eu gosto de cenoura true
     ii.  `CENOURA é bom pra vista` -- cenoura é bom pra vista true
     iii. `Cenouras crescem na terra` -- cenouras crescem na terra false
     
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.
     */

function sobreMim(){
    console.log('Eu sou Paulo, tenho 15 anos, moro em São Leopoldo e sou estudante.')
}
sobreMim()

/*b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].*/
    
function sobreMim1(nome,idade,endereco,profissao){
    console.log(`Eu sou ${nome}, tenho  ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
}

sobreMim1('Paulo',15,'são leopoldo','engenheiro')

/*2. Escreva as funções explicadas abaixo:
    
    a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.*/
    
function a(num1,num2){
    let resultado = num1 + num2
    return resultado
}
a(2,5)

   /* b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.*/

function maior(num1,num2){
    if (num1 >= num2){
        console.log('o',num1,'é maior ou igual que o numero',num2)
    } else {
        console.log('o',num1,'é menor que o numero',num2)
    }
}
maior(3,4)    

    /*c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não*/

    function parImpar(num){
        if((num %2) == 0){
            console.log('esse numero é par')
        }else {
            console.log('esse numero é impar')
        }
    }
    
   /* d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas. */
    

function d(mensagem){
    console.log(mensagem.length)
    console.log(mensagem.toLowerCase())
}

d('eai gurizes')

/*3)Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores passados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
Números inseridos: 30 e 3
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10*/

const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function soma(num1,num2){
    console.log(num1 + num2)
}
function diferenca(num1,num2){
    console.log(num1 % num2)
}
function multiplicacão(num1,num2){
    console.log(num1 * num2)
}
function divisao(num1,num2){
    console.log(num1 / num2)
}
rl.question('digite um numero',numero1)

