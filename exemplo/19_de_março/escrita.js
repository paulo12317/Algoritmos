let idade = 102
if (idade >= 18){
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir.")
}
let turno = 'M'
if (turno === 'M'){
    console.log('bom dia ')
} else if (turno === 'V'){
    console.log('boa tarde')
}else {
    console.log('boa noite')
}
switch (turno){
    case 'M':
        console.log('bom dia')
        break
    case 'V':
        console.log('boa tarde')
        break
    default:
        console.log('boa noite')
}
genero = 'fantasia'
let preco = 14

if ((genero === 'fantasia') && preco < 15){
    console.log('bom filme')
} else {
    console.log('escolha outro filme')
}




