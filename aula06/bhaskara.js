//chamada
    const prompt = require("prompt-sync")({sigint : true});
//variáveis
    let a = Number(prompt("Informe um valor para o coeficiente A: "));
    let b = Number(prompt("Informe um valor para o coeficiente B: "));
    let c = Number(prompt("Informe um valor para o coeficiente C: "));
    let delta = parseInt((b**2) - 4 * a * c);
//processo
    
    if(a != 0){

        console.log("A equação do terceiro grau montada com os valores informados é: "+a+"x^2+"+b+"x+"+c+"=0");
        console.log("O delta dessa equação é: "+delta);

        if(delta > 0)
        {
            console.log("Essa equação possui duas raízes reais.");
        }else if(delta == 0)
        {
            console.log("Essa equação possui apenas uma raiz real.");
        }else if(delta < 0)
        {
            console.log("Essa equação não possui raízes reais.");
        }else
        {
            console.log("Por favor, insira números válidos.");
        }
    }
    else{
        console.log("ATENÇÃO!! O COEFICIENTE A PRECISA SER DIFERENTE DE ZERO!");
    }