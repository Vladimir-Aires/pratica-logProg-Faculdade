const entrada = require("prompt-sync")();

// let preco = entrada("Informe o valor do celular: ");

// preco = Number(preco);

// while (preco > 2000){
//     console.log("Tá caro demais. Compra não.");
//     preco = entrada("Informe o valor de outro modelo: ");
//     preco = Number(preco);

// }

// console.log("Agora sim!");

// let horario = entrada("Que horas são? ");
// horario = Number(horario);

// let horaDeComer = ( horario === 12) ? "Hora do almoço!" : (horario < 12) ? "Hora do café da manhã" : "Hora da janta";

// console.log(horaDeComer);

const prompt = require("prompt-sync")({ sigint: true });

let preco_premiado = 2156;
let preco_palpite = Number(prompt("Dê seu palpite sobre o preço do celular: "));

for (let chance = 0; chance < 5 - 1; chance++) {
    while (preco_palpite !== preco_premiado) {
        console.log(
            "O celular ainda não é seu, mas você ainda pode tentar de novo."
        );
        preco_palpite = Number(prompt("Bora lá, próxima tentativa: "));

        break;
    }
}

if (preco_palpite === preco_premiado) {
    console.log("Você venceu!!!");
} else {
    console.log("Suas chances acabaram...");
}
