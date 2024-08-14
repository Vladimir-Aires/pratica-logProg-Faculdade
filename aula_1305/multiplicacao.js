
let numero = 5;
let array1 = [2,3,4];


function multiplicar (escalar, vetor){
    
  let conjuntoResultante = [];

  for(let i = 0; i < vetor.length; i++){
    let produto = escalar * vetor[i];

    conjuntoResultante.push(produto);
  }

  return console.log(`O ARRAY RESULTANTE DO PRODUTO DE ${escalar} E ${vetor} É IGUAL A : ${conjuntoResultante}`);
}

multiplicar(numero, array1);