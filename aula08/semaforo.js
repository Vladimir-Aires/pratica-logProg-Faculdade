const info = require("prompt-sync")({sigint : true});

let sinal = String(info("Informe o sinal do semáforo: "));
sinal = sinal.toUpperCase();


let resposta;

switch(sinal){
    case "VERMELHO":
        resposta = "PARE!!!";
        break;
    case "VERDE":
        resposta = "SIGA.";
        break;

    case "AMARELO":
        resposta = "ATENÇÃO!!";
        break;

    default:
        console.log("INFORME UMA COR VÁLIDA!!");

}
console.log(resposta);

