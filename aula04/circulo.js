
const valores = require("prompt-sync")();

//entrada e processo
const PI = 3.14;

let raioCirculo = Number(valores("Informe um valor para o raio do círculo: "));

let areaCirculo = Math.round(PI * (raioCirculo**2));
let perimetroCirculo = Math.round(2 * PI * raioCirculo);

//saída
console.log("A área do círculo (em m²) é igual a: "+areaCirculo+"\n"+"E o perímetro do círculo (em m) é igual a: "+perimetroCirculo);