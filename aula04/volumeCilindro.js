const valores = require("prompt-sync")();
const PI = 3.14;

//entrada
let raioCilindro = Number(valores("Informe um valor para o raio do cilindro: "));
let altura = Number(valores("Informer um valor para a altura do cilindro: "));

//processo
let volumeCilindro = Math.round(PI * (raioCilindro**2) * altura);

//saída
console.log("O volume desse cilindro é igual a "+volumeCilindro+" m²");