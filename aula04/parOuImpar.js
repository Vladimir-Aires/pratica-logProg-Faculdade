const numeroInformado = require("prompt-sync")();

//entrada
    let numero = Number(numeroInformado("Diga um número e veremos se ele é par ou ímpar: "));
//processo
    if(numero % 2 == 0){
        console.log("O número "+numero+" é par.");
    }
    else{
        console.log("O número "+numero+" é ímpar.");
    }