function multiplicacao (a,b){
    let resultado = a * b
    return resultado
}
let resultado = multiplicacao(2,5)
console.log(resultado + 777)
/*let calculaArea = function (altura,largura){
    let area = altura * largura
    return area
} 
let areaCalcula = calculaArea(2,3)
*/
//      Arrow function

let calculaArea = (altura,largura) => {
    let area = altura * largura
    return area
}
let areaCalculada = calculaArea(2,3)