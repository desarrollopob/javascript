
function crearCards() {
    const numeroCards = document.getElementById('cardCount').value;
    const cardsContainer = document.getElementById('cardsContainer');
    const namePerson = document.getElementById('name').value;
    const nameCity = document.getElementById('nameCity').value.toLowerCase(); //toLowerCase() se usa para poner todas las letras en mayusculas

    //SOLUCIÓN 1
    cardsContainer.innerHTML = '';


    //SOLUCIÓN 2
  /*   while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild)
    }
 */
//CONDCIONAL PARA EVALUAR SI LA PALABRA ESCRITA ES CUCUTA Ó SI EL NÚMERO DE CARDS ES MAYOR A 10
    if(nameCity==='cucuta' || numeroCards > 10 || namePerson.length > 20 || numeroCards < 3 ){
        alert('Hay un error en tu formulario')
    }else{
//Si la palabra escrita es diferente a cucuta y el número de cards es menor a 10 se imprimen las cards:
for (let i = 0; i < numeroCards; i++) {
    const card = document.createElement('div');    
    card.className = 'card';
    card.innerHTML = `<h2>${namePerson}</h2> <p>${nameCity}</p>`
    cardsContainer.appendChild(card)
       
   }
   
}
}