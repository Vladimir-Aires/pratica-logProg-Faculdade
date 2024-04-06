const guia = require("prompt-sync")();

let viagem = String(guia("Diga em qual estação você quer viajar: "));
viagem = viagem.toUpperCase();

switch (viagem){
    case "PRIMAVERA":   
        console.log("Você deve viajar entre o período de 20 de março até 20 de junho.");
    break;

    case "VERÃO":
        console.log("Você deve viajar entre o período de 21 de junho até 22 de setembro.");
    break;

    case "OUTONO":
        console.log("Você deve viajar entre o período de 23 de setembro até 21 de dezembro.");
    break;

    case "INVERNO":
        console.log("Você deve viajar entre o período de 22 de dezembro até 19 de março.");
    break;

    default:
        console.log("Isso não é uma estação válida.");
    break;
}