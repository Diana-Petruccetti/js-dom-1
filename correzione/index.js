
// Quando clicchi il pulsante la lampadina si accende
// e cambia la scritta da accesa a spenta e viceversa.

// Fase 1: seleziono gli elementi della DOM
const imgEl = document.querySelector('lamp');
const buttonEl = document.querySelector('button');

// Fase 2: collego un event listener all'immagine e al pulsante

buttonEl.addEventListener('click', () => {

   /*  console.log(imgEl.src);

    console.log(imgEl.src); */

    

    /* console.log(imgEl.getAttribute('src'), imgEl.getAttribute('src').includes('yellow')); */

    const is_on = imgEl.getAttribute('src').includes('yellow');
    console.log(is_on);

    if (is_on){
        imgEl.setAttribute('src', './white_lamp.png');
        buttonEl.textContent = 'Accendi';
        
    } else {
        imgEl.setAttribute ('src', './yellow_lamp.png');

    buttonEl.textContent = 'Spegni';
    }
})