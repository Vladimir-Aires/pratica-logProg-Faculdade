const info = require("prompt-sync")({sigint : true});

let diaNasc = Number(info("Informe o dia que você nasceu: "));
let mesNasc = Number(info("Informe o mês que você nasceu: "));


let signo;

switch(mesNasc){
    case  1:
        signo = (diaNasc <= 19) ? "Capricórnio" : "Aquário";
        break;

    case  2:
        signo = (diaNasc <= 18) ? "Aquário" : "Peixes";
        break;

    case  3:
        signo = (diaNasc <= 20) ? "Peixes" : "Áries";
        break;

    case  4:
        signo = (diaNasc <= 19) ? "Áries" : "Touro";
        break;

    case  5:
        signo = (diaNasc <= 20) ? "Touro" : "Gêmeos";
        break;

    case  6:
        signo = (diaNasc <= 20) ? "Gêmeos" : "Câncer";
        break;

    case  7:
        signo = (diaNasc <= 22) ? "Câncer" : "Leão";
        break;

    case  8: 
        signo = (diaNasc <= 22) ? "Leão" : "Virgem";
        break;

    case  9:
        signo = (diaNasc <= 22) ? "Virgem" : "Libra";
        break;

    case  10:
        signo = (diaNasc <= 22) ? "Libra" : "Escorpião";
        break;

    case  11:
        signo = (diaNasc <= 21) ? "Escorpião" : "Sagitário";
        break;

    case  12:
        signo = (diaNasc <= 21) ? "Sagitário" : "Capricórnio";
        break;
        
}       
console.log("Seu signo é: "+signo);
