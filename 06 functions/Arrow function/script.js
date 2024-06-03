//Operatore ternario: si utilizza come condizione "else if" e va a valorizzare una variabile, è più compatto e funziona cosi:

let isGiorno = false;
//la condizione isGiorno, se vera riporterà il primo valore in saluto altrimenti il secondo
const saluto = (isGiorno === true) ? "Buongiorno" : "Buonasera";

console.log(saluto);

//Scope: la funzione dello scope la conosciamo già, meno globale = meno possibilità di conflitto = meno errori e più riuso, una cosa che è doverosa ricordare è che dichiarando una variabile (const, let o anche var) non sarà mai visibile all'esterno dello scope, mentre dichiarare una variabile senza suffisso...

function fuoriScope(){
  const no = 'non lo vedo';
  let neanche = 'non lo vedo';
  var quandoMai = 'non lo vedo';
  si = 'lo vedo';
}

  console.log(no);
  console.log(neanche);
  console.log(quandoMai);
  console.log(si); //forse non è più possibile vedere un qualcosa di non dichiarato come variabile al di fuori dello scope

//a ogni modo ARROW FUNCTION! che sono state inserite in ES6 ed hanno questa sintassi
() => {

}//parentesi graffe solo se il codice ha bisogno di più righe

//possono avere un nome...
const arrow = () => 'mia funzione';

//...o essere anonime
arrow.addEventListener('click', () => {
  
  return 
});

//quelle nominali che sono salvate come variabili vanno richiamate proprio come delle funzioni normali
arrow();

//ATTENZIONE: LE ARROW FUNCTION POSSONO ESSERE INVOCATE SOLO DOPO ESSER STATE DICHIARATE

const somma = (num,num2) => num + num2;
//senza le graffe ha il return implicito
console.log(somma(7,3));

//ma quando ci può essere veramente utile?



//RICORDA CHE THIS può cambiare a seconda delle situazioni in grigliaDinamica abbiamo visto come può riportare l'oggetto window e il target di event