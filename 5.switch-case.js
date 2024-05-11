let ciudad = "CALI";

switch (ciudad) {
  case "Medellin":
    console.log("Esta ciudad es Medellín");
    break;

  case "Bogotá":
    console.log("Esta ciudad es Bogotá");
    break;
  case "Bucaramanga":
    console.log("Esta ciudad es Bucaramanga");
    break;
  case "CALI":
    console.log("Esta ciudad es Cali");
    break;
  default:
    console.log("No existe");
    break;
}


//SEGUNDO CASO
let numero = 25;
switch (numero) {
    case 32:
     let suma = 35 + 48;
     console.log(suma);   
    break;

    case 45:
     let multiplicacion = 41 * 66;
     console.log(multiplicacion);
    break;

    case 87:
     let division = 7 / 55;
     console.log(division);
    break

    case 25:
     let resta = 40 - 16;
     let texto = ' esto es una resta';
     console.log(texto + resta);
    break

    default:
        console.log('no hay datos');
        break;
}

