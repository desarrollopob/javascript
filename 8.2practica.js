//CREAR UN ALGORITMO PARA QUE LE ASIGEN UN TUTOR CUANDO LA PERSONA
//SEA MENOR A 18 AÑOS. 
//SI ES MAYOR O IGUAL A 18 AÑOS SE DEBE MOSTRAR UN MENSAJE DÓNDE DIGA: 
//NO NECESITAS UN TUTOR.

let nombre = prompt('ingresa tu nombre:')
alert('el nombre ingresado es:' + nombre)

let edad = prompt('ingresa tu año de nacimiento:')
let edadParse = parseInt(edad)

//CALCUALNDO LA EDAD BASADO EN LA FECHA DE NACIMIENTO QUE ESTÁ EN edadParse
function calcularEdad(anoNacimiento) {
    let anoActual = 2024;
    let edad = anoActual - anoNacimiento;
    let tutor = {nombre: 'pedro', ciudad: 'cali'};

    if (edad < 18) {
        alert('tu tutor es:' + ' ' + tutor.nombre);
    } else {
        alert('eres mayor edad, no necesitas un tutor');
    }
}
//console.log(calcularEdad(edadParse));
calcularEdad(edadParse);

