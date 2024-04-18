/*
3. Leia o código abaixo
    
    ```jsx
    */
    function minhaFuncao(objeto, propriedade) {
    	return objeto[propriedade]
    }
    
    const pessoa = {
      nome: "Caio", 
      idade: 23, 
      backender: false
    }
    
    console.log(minhaFuncao(pessoa, "backender"))
    console.log(minhaFuncao(pessoa, "altura"))
   /*
    ```
    
    a) O que vai ser impresso no console? vai imprimir false e undefined
    
    b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
    no primeiro vai dar false porque backender foi definido como false e no segundo undefined pq não foi definido ainda
    
    */