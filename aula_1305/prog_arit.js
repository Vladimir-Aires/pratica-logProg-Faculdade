
let progressao1 = [2,5,8,11,14,17];


function somaProgAritmetica(progressao){

    let elementoInicio = progressao[0];
    let elementoFinal = progressao[progressao.length - 1];
    let quantidade = progressao.length;

    let somaDosElementos = (elementoInicio + elementoFinal) * (quantidade / 2);

    return console.log(`SOMA DOS ELEMENTOS DA P.A. : ${somaDosElementos}`);
}

somaProgAritmetica(progressao1);