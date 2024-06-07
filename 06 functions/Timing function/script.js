//Le timing function sono funzioni con una specificità di utilizzo a tempo e possono avere molte utilità nel codice

//la prima che vediamo è la funzione setTimeout che attiva la funzione dopo un tot di tempo specifico usato come parametro.  La sintassi è questa

setTimeout(nomeFunzione, 3000); //tempo espresso in millisecondi

function nomeFunzione(){
  console.log('arrivato');
  }
console.log('partito');

//la funzione può essere sia dichiarata che anonima e i secondi possono anche essere salvati in una variabile e riutilizzati

const secondi = 5;

setTimeout(function(){
  console.log('anch\'io');
}, secondi * 1000);