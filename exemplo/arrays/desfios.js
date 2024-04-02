let per = ['naruto','goku','peppa','george']
function ramdomPersonagem(array){
    
    let aleatorio = Math.floor(Match.ramdom() * array.length)
   
    return array[aleatorio]
}
let quem = ramdomPersonagem(per)
console.log(quem)