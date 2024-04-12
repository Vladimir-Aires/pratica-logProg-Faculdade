const prompt = require("prompt-sync")();

//entrada
    let qtdProduto1 = Number(prompt("Informe a quantidade desse produto a ser comprada: "));
    let qtdProduto2 = Number(prompt("Informe a quantidade desse outro produto a ser comprada: "));

//processo
    let resultado = qtdProduto1 + qtdProduto2;

//saída
    console.log("A quantidade total de produtos foi: " + resultado + ". Confirmar compra?");