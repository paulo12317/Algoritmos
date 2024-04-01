function informações (){
    console.log('Eu sou Liuji, tenho 15 anos, moro em são leopoldo e sou gay')
}
informações()

const readline = require('readline')
const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu numero', (num1) => {
    if (num1 > 0){
        console.log("seu numero é positivo")
    } else {
        console.log ('seu numero é negativo')
    }

    rl.close();
});
function menorNumero(num1, num2) {
    return Math.min(num1, num2);
  }
  console.log(menorNumero(50,10) )