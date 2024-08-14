let progressao2 = [1,5,25,125];


function somaProgGeometrica(progressao){

    let elementoInicio = progressao[0];
    let quantidade = progressao.length;
    let razao = progressao[1] / progressao[0];

    let somaDosElementos = ((elementoInicio * (razao ** quantidade) - 1) / (razao - 1));

    return console.log(`SOMA DOS ELEMENTOS DA P.G. : ${somaDosElementos}`);
}

somaProgGeometrica(progressao2);