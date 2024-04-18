/*Resolva os passos a seguir: 
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
 Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: ["Vitinho", "Vitão", "Vit"]
}

// Exemplo de saída
"Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
 */

const pessoa = {
    nome: 'Paulo',
    apelido: ['Paula Tejano', 'Paulo Brifycado','Pirlo']
}
function exer1(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelido}`)
}
exer1(pessoa)

/*b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto */

const novoObjeto = {...pessoa, apelido: ['Ainton Lanbida', 'Thomas Turbando', 'Deide Costa','Kiko zinho lindo e branco']}

exer1(novoObjeto)










