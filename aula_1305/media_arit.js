
let conjunto1 = [3,5,8];

function media (numeros){
    let soma = numeros.reduce((anterior, atual) => anterior + atual);
    soma = soma / numeros.length;
    return console.log(`MÉDIA ARITMÉTICA IGUAL A : ${soma.toFixed(2)}`);
}


media(conjunto1);