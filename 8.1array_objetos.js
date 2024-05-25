let estudiantes = [
    {nombre: 'Camila', apellido: 'Marin', grado: 'noveno'},
    {nombre: 'Camilo', apellido: 'Marin', grado: 'octavo'},
    {nombre: 'Jorge', apellido: 'Toro', grado: 'quinto'},
    {nombre: 'Sandra', apellido: 'Cortés', grado: 'quinto'},
];

//MOSTRAR EL SEGUNDO NOMBRE DE LA LISTA
//let nomEstudiante = estudiantes[2].nombre;
console.log(estudiantes[2].nombre);

//AGREGANDO UN OBJETO A MI LISTA ESTUDIANTES
estudiantes.push(
    {nombre: 'Carolina', apellido: 'Mota', grado: 'primero'},
    {nombre: 'Patricia', apellido: 'Mota', grado: 'primero'},
    {nombre: 'Cristian', apellido: 'Mota', grado: 'primero'},
);
console.log(estudiantes);

//AGREGANDO UN OBJETO CON SU OBJETO HIJO A LA LISTA ESTUDAINTES

estudiantes.push( 
    {
        nombre: 'Juan', apellido: 'Mora', grado: 'segundo',
        familiare:{
            madre: 'Carmen Mora',
            barrio: 'Poblado',
            edad: 40,
        }
    }
);

console.log(estudiantes);
