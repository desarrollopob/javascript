let persona = {
    nombre: 'Carlos',
    apellido: 'Torres',
    edad: 45,
    fecha_nacimiento: Date(1995, 11, 17),
    documento: 1112244555,
};
console.log( 'imprimiendo el objeto:' + persona);
console.log('imprimendo docuemnto:' + persona.documento);
console.log('Imprmiendo nombre y apellido:' + persona.nombre + ' '+ persona.apellido );


let pais = {
    presidente: 'pepito',
    alcaldes: 'pepita',
    ciudad: {
        nombre: 'Cali',
        cantidad_personas: 4876,
        cantidad_barrios: 100,
        fecha_fundacion: '2/mayo/1845'
    }
}
console.log('IMPRIMIENDO EL OBJETO PAÍS');
console.log(pais);
console.log(pais.ciudad.cantidad_personas);