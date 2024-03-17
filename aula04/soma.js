const prompt = require("prompt-sync")();

//entrada
    let numero1 = Number(prompt("Introduza o primeiro número: "));
    let numero2 = Number(prompt("Introduza o segundo número: "));

//processo
    let resultadoSoma = numero1 + numero2;

//saída
    console.log("A soma desses números \n equivale a : " + resultadoSoma);