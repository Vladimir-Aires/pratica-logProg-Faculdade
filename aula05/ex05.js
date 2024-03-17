//Declaração de variável

var numero = 2;

//Controle de fluxo condicional
if(numero % 2 == 0){
    console.log("O número "+numero+" é par.");
}
else{
    console.log("O número "+numero+" é ímpar.");
}

if( numero % 2 == 0 && numero % 3 == 0){
    console.log("O número "+numero+" é múltiplo de seis.");
}
else{
    console.log("O número "+numero+" não é múltiplo de seis."); 
}

console.log("O número "+numero+" na décima potência é igual a: " + Math.pow(numero, 10));
                                                            // também dá pra calcular potência com '**'