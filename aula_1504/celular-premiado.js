const prompt = require("prompt-sync")({ sigint: true });

let preco_premiado = 2156;
let preco_palpite = Number(prompt("Dê seu palpite sobre o preço do celular: ")); // -> O PRIMEIRO PROMPT PERMITE A ENTRADA NO LOOP QUE FOR QUE FARÁ O CONTROLE DE TENTATIVAS E O LOOP WHILE QUE FARÁ O CONTROLE DE ERRO

for (let chance = 0; chance < 5 - 2; chance++) {
    while (preco_palpite !== preco_premiado) {
        console.log(
            "O celular ainda não é seu, mas você ainda pode tentar de novo."
        );
        preco_palpite = Number(prompt("Bora lá, próxima tentativa: ")); // -> APÓS A ENTRADA NO LOOP, A VARIÁVEL SÓ PRECISA DE UMA PEQUENA ALTERAÇÃO PARA ESTAR DE ACORDO COM O CONTEXTO

        break;
    }
}

// -> O CONDICIONAL NATURALMENTE INTERROMPERÁ O LOOP QUANDO TIVER VALOR LÓGICO VERDADEIRO. CASO CONTRÁRIO, O TÉRMINO DOS LOOPS FARÁ RECORRER AO VALOR LÓGICO FALSO DO CONDICIONAL

if (preco_palpite === preco_premiado) {
    console.log("Você venceu!!!");
} else {
    console.log("Suas chances acabaram...");
}
