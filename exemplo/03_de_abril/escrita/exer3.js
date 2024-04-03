let listaDeTarefas = []
const readlineSync = require('readline-sync');

const tarefa1 = readlineSync.question("fale uma tarefa que você pricisa fazer? ")
const tarefa2 = readlineSync.question("fale uma tarefa que você pricisa fazer? ")
const tarefa3 = readlineSync.question("fale uma tarefa que você pricisa fazer? ")
listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
const indice = readlineSync.question("fale o indice de uma tarefa que você já fez? ")
listaDeTarefas.splice(Number(indice), 1)
console.log(listaDeTarefas)