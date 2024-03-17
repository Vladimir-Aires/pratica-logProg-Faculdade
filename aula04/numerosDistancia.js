const numeroInformado = require("prompt-sync")();

//entrada
    let numero1 = Number(numeroInformado("Informe um número: "));
    let numero2 = Number(numeroInformado("Informe outro número: "));
//processo
    let distancia = Math.abs(numero1 - numero2);
//saída
    console.log("A distância entre "+numero1+" e "+numero2+" é igual a: "+distancia);