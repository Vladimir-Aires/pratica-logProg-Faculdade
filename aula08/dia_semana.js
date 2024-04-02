let day;

switch (new Date().getDay()) {
    case 0:
        day = "DOMINGO";
        break;

    case 1:
        day = "SEGUNDA-FEIRA";
        break;

    case 2:
        day = "TERÇA-FEIRA";
        break;

    case 3:
        day = "QUARTA-FEIRA";
        break; 

    case 4:
        day = "QUINTA-FEIRA";
        break;

    case 5:
        day = "SEXTA-FEIRA";
        break;

    case 6:
        day = "SÁBADO";
}

    console.log("HOJE É: "+day);
