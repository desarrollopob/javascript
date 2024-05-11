let nombre = prompt('ingresa tu nombre:')
alert('el nombre ingresado es:' + nombre)

let edad = prompt('ingresa tu año de nacimiento:')
let edadParse = parseInt(edad)


function calcularEdad(anoNacimiento) {
    let añoActual = 2024;
    let resultado = añoActual - anoNacimiento 
    return alert(nombre + ' ' + 'Tiene' + ' ' + resultado + ' ' + 'años' )
}


calcularEdad(edadParse)