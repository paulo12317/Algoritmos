/*
Responda todas as questões abaixo:

Javascript é a mesma coisa que Java.
{a)Verdadeiro}
b)Falso

Como se declara uma variável em Javascript?
{a) const carName}
b) variable carName
c) new carName

Que operador é usado para dar valor a uma variável?
{a) =}
b) -
c) *
d) x

Diga o que a seguinte equação retorna: 10 > 9
a) false
{b) true}
c) NaN

Javascript é case-sensitive (que diferencia maiúsculas de minúsculas)?
{a) Sim}
b) Não

Como se cria uma função em Javascript?
{a) function myFunction()}
b) function:myFunction()
c) function = myFunction()

Como se invoca uma função chamada "myFunction"?
a) call myFunction()
b) function MyFunction()
{c)myFunction}

Como se escreve o condicional IF em Javascript?
{a) if(i===5)}
b) if i = 5 then
c) if i =5
d) if i == 5 then

Como escrever o condicional IF para executar um código se "i" não for igual a 5?
a) if(i <> 5)
{b) if (i != 5)}
c) if i =! 5 then
d) if i <>5

Como um WHILE começa?
a) while i=1 to 10
{b) while (i <= 10)}
c) while (i<= 10;i++)

Como um LOOP FOR começa?
a) for i=1 to 5
b) for (i=0;i<=5)
c) for (i<=5;i++) 
{d) for (i=0;i<=5;i++)}

Como se adiciona um comentário em Javascript?
a)<!--Este é um comentário-->
{b)//Este é um comentário}
c)"Este é um comentário"

Como adicionar um comentário com mais de uma linha?
{a)/*Este comentário tem
mais de uma linha}*/
/*b)<!--Este comentário tem
mais de uma linha-->
c)"Este comentário tem
mais de uma linha"

Qual é a maneira correta de escrever um array?
{a)const colors = ['red','green','blue']}
b)const colors = 'red','green','blue'
c)const colors = [1:'red',2:'green',3:'blue']
d)const colors = ['red'],['green'],['blue']

Usando um comando em Javascript, como você arredondaria o número 7.25?

Math.floor(7.25)

Variáveis:

Qual é a maneira correta de nomear uma variável?
a) MYNAME
b) myname
c) my Name
d) variavel
{e) myName}

Qual o valor de uma variável que está vazia?
a) NaN
{b) undefined}
c) ERROR

Crie uma variável chamada carName e atribua o valor Maverick a ela:

let carName = 'Maverick'


Criar uma variável chamada x e atribua o valor 50 a ela.

let x = 50

Exiba a soma de 5 + 10 usando duas variáveis x e y.

let x = 5
let y = 10
console.log(x + y)

Complete o código criando uma variável chamada z, atribuia x + y a ela e exiba o resultado:

let x = 5;
let y = 10;
let z = (x + y)
console.log(z)

Declare estas três variáveis em UMA ÚNICA LINHA com estes nomes e valores específicos:

firstName = "John"
lastName = "Doe"
age = 35

let array = ['john','Doe',35]

Operadores:

Multiplique 10 por 5 e exiba o resultado.

console.log(10 * 5)

Exiba o resto da divisão de 15 por 9.

console.log(15 % 9)

Use o operador de atribuição correto para fazer x ser igual a 15 (o mesmo que escrever x = x + y).

x = 10
y = 5
x = x + y

Usa o operador de atribuição correto para fazer x ser igual a 50 (o mesmo que escrever x = x * y).

x = 10
y = 5
x = x * y

Tipos de Dados:

Use comentários para descrever o tipo correto de cada uma das variáveis abaixo:

let length = 16; //Number
let lastName = "Johnson"; //String
const x = {
  firstName: "John", //String
  lastName: "Doe"  //String
};

Funções:

Execute a função chamada myFunction:

function myFunction() {
  alert("Hello World!");
}

myFunction()

Complete o código, criando uma função chamada myFunction:

function myFunction(){
console.log("Hello World")
}

Complete o código, fazendo com que a função RETORNE a palavra "Hello":

function myFunction() {
  console.log("Hello")
}

console.log(myFunction(),"World")


Objetos:

Mostre a informação "John"em um console.log, extraindo essa informação do objeto:

const person = {
  firstName: "John",
  lastName: "Doe"
};
console.log(person.firstName)

Adicione a seguinte propriedade e valor ao objeto person: country: Norway.

const person = {
  firstName: "John",
  lastName: "Doe" 

};
person.country = 'Norway'

Crie um objeto chamado person com name = John e age = 50.
Em seguida, acesse o objeto para exibir a mensagem "John tem 50 anos.".

let person ={
    name: 'john',
    age: 50
}
console.log(`${person.name} tem ${person.age} anos.`)

Strings:

Complete o o código usando a propriedade correta para exibir o comprimento de txt:

let txt = "Hello World!";
let x = txt;
console.log(x);

Concatene as duas strings para exibir a mensagem "Hello World!":

let str1 = "Hello ";
let str2 = "World!";
let str3 = str1 + str2;
console.log(str3)

Converta o texto para um texto EM MAIÚSCULAS:

let txt = "Hello World!";
console.log(txt.)
console.log(txt.toUpperCase())

Use o método correto de String para substituir a palavra "Hello" pela palavra "Welcome".
let txt = "Hello World";
console.log(txt.ReplaceAll('Hello', 'Welcome'))

Arrays:

Mostre o valor "Volvo" do array "cars":

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1])


Mude o primeiro item de "cars" para "Ford":

const cars = ["Saab", "Volvo", "BMW"];
cars[0] = 'Ford'

Mostre o número de itens que há no array usando a propriedade certa:

const cars = ["Volvo", "Jeep", "Mercedes"];
console.log(cars.length)

Use o método correto de Array para remover o último item do array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop()

Use o método correto de Array para adicionar "Kiwi" ao array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.push('Kiwi')

Use o método splice() para remover "Orange" e "Apple" do array fruits.
const fruits = ["Banana", "Orange", "Apple"];
fruits.splice(1,2)

Comparadores:

Escolha o operador de comparação correto para mostrar verdadeiro quando x for maior que y.

x = 10;
y = 5;

console.log(x > y)

Escolha o operador de comparação correto para alertar verdadeiro quando x for igual a y.

x = 10;
y = 5;
console.log(x === y)

Escolha o operador de comparação correto para alertar verdadeiro quando x não for igual a y.

x = 10;
y = 5;
console.log(x != y)

Condicionais:

Crie um código para mostrar "Hello World" se x for maior que y:
x = 10;
y = 5;
if(x > y){
    console.log("Hello World")
}

Crie um código para mostrar "Hello World" se x for maior que y,e se não for, imprima "Goodbye":
x = 10;
y = 5;
if(x > y){
    console.log("Hello World")
}else{
    console.log("Goodbye")
}

Switch:

Crie uma declaração switch que irá mostrar "Olá" se fruits for "banana" e "Bem-vindo" se fruits for "maçã".
let fruits = 'banana'
switch (fruits){
    case 'banana':
        console.log('Ola')
        break
    case 'Maçã':
        console.log("Bem-vindo")
        
}


Adicione uma seção que irá alertar "Nem um nem outro" se fruits não for nem "banana" nem "maçã".

let fruits = 'banana'
switch (fruits){
    case 'banana':
        console.log('Ola')
        break
    case 'Maçã':
        console.log("Bem-vindo")   
        break
    default:
        console.log("Nem um nem outro")
}       


Loop For:

Crie um loop for que conte de 0 até 9.

for(i = 0; i <= 9; i++){
    console.log(i)
}


Crie um loop for que percorra todos os itens do array:
const fruits = ["Apple", "Banana", "Orange"];
for(i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}


Loop While:

Crie um loop que continua executando enquanto i for menor que 10.

i = 0
while(i < 10){
    console.log(i)
    i++
}

Crie um loop que continua executando enquanto i for menor que 10, mas incremente i com 2 a cada vez.
i = 0

while(i < 10){
    console.log(i)
    i + 2
}

*/