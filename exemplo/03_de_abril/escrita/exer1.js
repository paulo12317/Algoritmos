const readlineSync = require('readline-sync');

const email = readlineSync.question("Qual seu email? ");
const nome = readlineSync.question("Qual seu nome? ");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)
