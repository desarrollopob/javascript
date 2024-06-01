
function crearCards() {
    const numeroCards = document.getElementById('cardCount').value;
    const cardsContainer = document.getElementById('cardsContainer')
    //SOLUCIÓN 1
    cardsContainer.innerHTML = '';


    //SOLUCIÓN 2
  /*   while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.firstChild)
    }
 */
    for (let i = 0; i < numeroCards; i++) {
     const card = document.createElement('div');    
     card.className = 'card';
     card.innerHTML = `<h2>Juanito</h2> <p>Cali</p>`
     cardsContainer.appendChild(card)
        
    }
 
}