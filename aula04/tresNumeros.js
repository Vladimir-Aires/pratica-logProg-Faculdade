const numeroInformado = require("prompt-sync")();

//entrada
    let numero1 = Number(numeroInformado("Diga o primeiro número: "));
    let numero2 = Number(numeroInformado("Diga o segundo número: "));
    let numero3 = Number(numeroInformado("Diga o terceiro número: "));

    let maior = Math.max(numero1, numero2, numero3);
//saída
    console.log("O maior desses três números é: "+maior);