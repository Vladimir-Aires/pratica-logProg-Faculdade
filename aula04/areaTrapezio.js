//entrada
const valores = require("prompt-sync")();

let baseMaior = Number(valores("Informe um valor para a base MAIOR do trapézio: "));
let baseMenor = Number(valores("Informe um valor para a base MENOR do trapézio: "));
let altura = Number(valores("Informe o valor da altura para o trapézio: "));

//processo
let areaTrapezio = Math.round(((baseMaior + baseMenor) * altura) / 2);

//saída
console.log("A área do trapézio é igual a: "+areaTrapezio);