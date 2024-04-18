/*
2. Leia o código abaixo
    
    ```jsx
    const cachorro = {
    	nome: "Juca", 
    	idade: 3, 
    	raca: "SRD"
    }
    
    const gato = {...cachorro, nome: "Juba"}
    
    const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    console.log(cachorro)
    console.log(gato)
    console.log(tartaruga)
    ```
    
    a) O que vai ser impresso no console?
     no primeiro vai ser impresso: nome: "Juca", idade: 3, raca: "SRD"
     no segundo vai ser impresso: nome: "Juba", idade: 3, raca: "SRD" 
     no terceiro vai ser impresso: nome: "Jubo", idode: 3, roco: "SRD" 
    b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
    copia o objeto sugerido
    */