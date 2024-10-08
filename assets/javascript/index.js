
// Quando clicchi il pulsante la lampadina si accende
// e cambia la scritta da accesa a spenta e viceversa.

// Fase 1: seleziono gli elementi della DOM
let imgEl = document.getElementById('lamp');
let buttonEl = document.getElementById('button');

// Fase 2: collego un event listener all'immagine e al pulsante

buttonEl.addEventListener('click', ()=> {

    imgEl.src="./assets/img/yellow_lamp.png";
})