
function crearCards() {
    const numeroCards = document.getElementById('cardCount').value;
    const cardsContainer = document.getElementById('cardsContainer');
    const namePerson = document.getElementById('name').value;
    const nameCity = document.getElementById('nameCity').value;

    //SOLUCIÓN 1
    cardsContainer.innerHTML = '';


    //SOLUCIÓN 2
  /*   while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild)
    }
 */

    if(nameCity==='cucuta' ){
        alert('Esta ciudad no está permitida')
    }else{
        for (let i = 0; i < numeroCards; i++) {
            const card = document.createElement('div');    
            card.className = 'card';
            card.innerHTML = `<h2>${namePerson}</h2> <p>${nameCity}</p>`
            cardsContainer.appendChild(card)
               
           }
    }
   
 
}