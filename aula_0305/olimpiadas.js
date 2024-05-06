/*
    Os jogos olímpicos de verão ocorrem de 4 em 4 anos desde 1896, em que ocorreu a primeira Olimpíada sediada na
Grécia. Todavia, nos anos de 1916, 1940, e 1944 houve cancelamento devido às guerras mundiais. 

1)Escreva um programa de JS que armazene em um array todos os anos em que ocorreram os jogos olímpicos de verão até os últimos, que foram
sediados em Tóquio em 2020.

Extra: 
1.1. Determine em que ano ocorreu a décima quarta Olimpíada.
1.2. Determine quantos Olimpíadas ocorreram entre 1900 e 2000.
1.3. Determina quantas edições de Olimpíadas ocorreram desde 1896.
*/


let olimpiadaInicio = 1896;
let olimpiadaFim = 2020;
let anosSemOlimpiada = [1916, 1940, 1944];

let anosDeOlimpiada = [];

for ( let contador = olimpiadaInicio; contador <= olimpiadaFim; contador++){
    if( (contador % 4 == 0) && (!anosSemOlimpiada.includes(contador))){
        anosDeOlimpiada.push(contador);
    }
}
console.log("ANOS DE OLIMPIADA DE 1896 ATÉ 2020:")
console.log(anosDeOlimpiada.join('-')); 

let edicoesQtd = anosDeOlimpiada.length;

console.log("QUANTIDADE DE EDIÇÕES DESDE 1896 ATÉ 2020: ",edicoesQtd );

// ---- PEGANDO UMA FAIXA ESPECÍFICA PARA SABER A QUANTIDADE DE ELEMENTOS DESTA ---------

let de1900ate2000 = anosDeOlimpiada.slice(anosDeOlimpiada.indexOf(1900), anosDeOlimpiada.indexOf(2000));

de1900ate2000 = de1900ate2000.length + 1;

console.log("QUANTIDADE DE EDIÇÕES QUE OCORRERAM ENTRE 1900 E 2000: ",de1900ate2000);
