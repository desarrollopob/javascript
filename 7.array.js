let productos = ["panela", "Arroz", "carne", "lentejas" ];

//ESTAMOS ACCEDIENTO A DOS ELEMENTOS
console.log( productos[0]+ ' ' + productos[2]);


//ESTAMOS AGREGANDO UN ELEMENTO Al FINAL DE LA LISTA
productos.push('Papas', 'Café', 5);
console.log(productos);


//ESTAMOS AGREGANDO UN ELEMENTO AL INICIO DE  LA LISTA
productos.unshift('Pollo', 'yogurt');
console.log(productos);

//ESTAMOS ELIMINANDO UN ELEMENTO DE LA LISTA
productos.splice(1, 3);
console.log(productos);

//ESTAMOS IMPRIMIENDO LA CANTIDAD DE ELEMENTO DE LA LISTA
console.log('La lista tiene: ' + productos.length + 'elementos');
//ESTAMOS BUSCANDO UN ELEMENTO EN LA LISTA
let productoEncontrado = 
productos.filter(function resultado(res) {
   return res === 'carne';
    
});
console.log('hola filter:' + productoEncontrado);

//ESTAMOS RECORREIENDO UNA LISTA
let recorriendoProductos = productos.map(
    function mapProductos(res) {
        return res;
    }
)

//console.log('hola mapa'+ ' ' + recorriendoProductos);
console.log( recorriendoProductos + 'acabo de encontrar mas de dos elementos');