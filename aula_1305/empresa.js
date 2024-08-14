const entrada = require("prompt-sync")();
let categoria1 = String(entrada("INFORME A CATEGORIA: "));
let salario1 = Number(entrada("INFORME O SALÁRIO: "));

categoria1 = categoria1.toUpperCase();

classeDeTrabalho(categoria1, salario1);

 async function classeDeTrabalho(categoria, salarioInicial){
    let salarioFinal;

    switch(categoria){

        case "A":
            salarioFinal = salarioInicial + ((salarioInicial * 10) / 100);
            console.log(`O SALÁRIO FINAL É: ${salarioFinal.toFixed(2)}`);
        break;

        case "B":
            salarioFinal = salarioInicial + ((salarioInicial * 15) / 100);
            console.log(`O SALÁRIO FINAL É: ${salarioFinal.toFixed(2)}`);
        break;

        case "C":
            salarioFinal = salarioInicial + ((salarioInicial * 20) / 100);
            console.log(`O SALÁRIO FINAL É: ${salarioFinal.toFixed(2)}`);
        break;

        default:
            console.log("INSIRA UMA CATEGORIA VÁLIDA");
        break;
    }
    
}