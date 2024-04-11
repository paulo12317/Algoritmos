/*0. Mostrar a sequência de Fibonacci até o 10º termo: Utilize um loop for para
calcular e mostrar os 10 primeiros termos da sequência de Fibonacci no console. */
let num = 1
let num2 = 1

for(i = 1; i <= 10;i++){
    
    resultado = num + num2
    num = num2 
    num2 = resultado

    console.log(resultado)
}

