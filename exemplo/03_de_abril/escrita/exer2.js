let comida = ['churras', 'pastel', 'dogão', 'pizza', 'maça']
console.log(comida)
console.log(`Essas são as minhas comidas preferidas:
${comida[0]}
${comida[1]}
${comida[2]}
${comida[3]}
${comida[4]}
`)
const readlineSync = require('readline-sync');

const comidaFavorita = readlineSync.question("qual sua comida favorita? ")
comida.splice(1,1)
comida.push(comidaFavorita)
console.log(comida)