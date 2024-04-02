const info = require("prompt-sync")({sigint : true});

let diaNasc = Number(info("Informe o dia que você nasceu: "));
let mesNasc = String(info("Informe o mês (em palavras) que você nasceu: "));
mesNasc = mesNasc.toLowerCase();

let signo;

switch(mesNasc){
    case "janeiro" || 1:
        signo = (diaNasc <= 20) ? "Capricórnio" : "Aquário";
        break;
    case "fevereiro":

    case "março":

    case "abril":

    case "maio":

    case "junho":

    case "julho":

    case "agosto":

    case "setembro":

    case "outubro":
        
    case "novembro":

    case "dezembro":
}
console.log("Seu signo é: "+signo);
