let num = [11,15,18,14,12,13]
let maiorN = 0
function maior(array){
  for(i = 0; i < num.length; i++ ){
    if (array[i] > maiorN){
        maiorN = array[i]
    }
      
  }
  return maior
}
maior(num)
console.log(maiorN)