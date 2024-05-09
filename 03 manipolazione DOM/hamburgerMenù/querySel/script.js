/*
 creiamo un menù dinamico con l'ausilio delle mediaQuery in css
 e dei selettori avanzati in Javascript
*/

const menu = document.querySelector('.menù');
const coloredMenu = document.querySelector('.colored-menu');
const minMenu = document.querySelector('.minMenu');
const btn = document.querySelector('.btn');

//ricorda di usare questa proprietà per scrivere css in JS
menu.style.cssText = "display: flex; justify-content: flex-end; list-style: none";
minMenu.style.cssText = "list-style: none";
//ATTENZIONE ricorda che questo modo di scrivere CSS è superiore in importanza alle regole dello stesso CSS quindi la media query non sarà fattibile perchè "Quando si imposta lo stile direttamente in JavaScript utilizzando elemento.style.cssText, questo stile viene applicato come stile inline all'elemento, il che significa che ha la massima priorità di specificità. Ciò potrebbe sovrascrivere le regole CSS esterne definite nel foglio di stile."

//coloredMenu.style.cssText ="display: none";

//un let per il toggle del pulsante
let check = true;
//utilizziamo addEventListener con una funzione nominativa dichiarata altrove
btn.addEventListener('click', mostraNascondi);

function mostraNascondi() {
  //ATTENZIONE nella condizione ci va il toggle di controllo
  if (check) {
    minMenu.classList.remove('hide');
    check = false;
    console.log(minMenu);
  }else{
    minMenu.classList.add('hide');
    check = true;   
    console.log(minMenu);
  }
}
console.log(minMenu);


