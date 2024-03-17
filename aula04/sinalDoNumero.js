const numeroInformado = require("prompt-sync")();

//entrada
    let numero = Number(numeroInformado("Informe um número: "));
 //processo   
    if(numero < 0){
        console.log("O número "+numero+" é negativo.");
    }else if(numero === 0){
        console.log("O número "+numero+" é igual a zero.");
    }else if(numero > 0){
        console.log("O número "+numero+" é positivo.");
    }
    else{
        console.log("Erro. Nenhum número informado.");
    }