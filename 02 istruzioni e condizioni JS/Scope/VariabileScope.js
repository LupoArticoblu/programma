

//l' ambito di visibilità di una variabile è il contesto all'interno del quale si può richiamare una certa variabile(variabile globale, variabile di funzione o in blocco di codice)

//variabile globale: accessibile e utilizzabile ovunque nel codice

let Globale;

//variabile di funzione: ha uno scope di tipo block ed è accessibile esclusivamente dal blocco di codice in cui è dichiarata

if(!Globale){
  let Block = "variabile di funzione"
  Block += " sarà possibile utilizzarla solo in questo if"
}

//esempio con console.log di variabili scoped

const A = "lettera A";
let B = "lettera B";
let valido = 1;

if (valido == true) {
  let C = 'lettera C';
  
  //ATTENZIONE avendo 2 variabili con lo stesso nome (B[globale] e B[scoped]) vanno in conflitto e ho un errore di log in questo caso, perchè sto cercando di leggere la variabile B nella funzione prima che essa venga dichiarata
  
  //console.log(B); --> errore log BLOCCANTE
  //let B = 'lettera ß'; --> errore log per dichiarazione postuma
  
  //qui la variabile viene prima dichiarata in scope e poi letta 
  let B = 'lettera ß';
  console.log(B);
  
  //una variabile globale posso usarla all'interno di uno scoped
  console.log(A);
  console.log(B);
  console.log(C);
}

console.log(A);
//la variabile B resta invariata a quella globale dichiarata
console.log(B);
//la variabile C non esiste all'esterno del suo scope
//console.log(C); --> non leggibile : undefined


//-----PARI E DISPARI CON L'UTENTE------

const pari_dispari = prompt('Scegli tra pari e dispari digitando "pari" o "dispari"');

let numUtente;
let sommaValori;
const numCPU = Math.ceil(Math.random() * 9);
console.log('Numero CPU', numCPU);
let risultato;

//e se mettessi dei valori non corretti?
let verifica = true;

//verifico il primo input...
if (pari_dispari !== "pari" && pari_dispari !== "dispari") {
  verifica = false;
  alert('Scrivi solo pari o dispari!');
}

//...e anche il secondo
if (verifica) {
  numUtente = parseInt(prompt("inserisci un numero da 1 a 9"));
  if (numUtente < 1 || numUtente > 9 ||  isNaN(numUtente)) {
    alert('inserisci solo un numero da 1 a 9');
    verifica = false;
  }
}


//sommiamo i 2 valori e...
sommaValori = numCPU + numUtente;

if (verifica) {
  if (sommaValori % 2 === 0) {
    if (pari_dispari == "pari") {
      risultato = `Hai vinto! è uscito il numero ${sommaValori}`;
    }else if (pari_dispari == "dispari") {
      risultato =`Hai perso! è uscito il numero ${sommaValori}`;
    }
  } else {
    if (pari_dispari == "dispari") {
      risultato = `Hai vinto! è uscito il numero ${sommaValori}`;
    }else if (pari_dispari == "pari") {
      risultato =`Hai perso! è uscito il numero ${sommaValori}`;
    }
  }
} else {
  risultato = "Ricarica la pagina e riprova";
}

document.getElementById('scoped').innerHTML = risultato;