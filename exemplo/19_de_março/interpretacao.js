const respostaDoUsuario = "90" //a)criar um variavel string
const numero1 = Number(respostaDoUsuario) //a) muda a variavel para number criando uma nova variavel

if (numero1 % 2 === 0) { //a) se esse comando for true vai execultar isso 
    console.log("Passou no teste.") //a)ele realiza o teste de se o numero da sua resposta dividido por dois o resto tem que ser igual a zero para passar no teste
} else { console.log("Não passou no teste.") } //a) se nao vai execultar isso

/*b) para numeros pares
c)para numeros impares
*/



let fruta = 'Maçã'
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

/*a)esse codigo serve para saber o preço de cada fruta 
b)ia imprimir 'O preço da fruta maça é R$2.25'
c)o codigo iria dar erro
*/

const numero = Number(("50"))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
//a)esta criando uma variavel string e depois trocando para Number
//b)se o usuario digita-se 10 seria escrito 'Esse número passou no teste' se fosse -10 seria escrito "Essa mensagem é secreta!!!"
//c)sim