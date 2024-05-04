
let a = 5;
let b = 7;

a += b; //a = a + b
console.log(a); 

b -= a; //b = a(che ha già cambiato il suo valore predefinito) - b
console.log(b); 

//---------- ho un prodotto che costa 8€ chiedo all'utente quanti ne vuole, sommo il 22% d'iva e gli faccio il 50% di sconto, vi faccio un output con tutti i dati richiesti


const prezzoProd = 8;
const iva = 0.22;
const sconto = 0.5;
const prodRichiesti = parseInt(prompt('quanti prodotti vuoi acquistare?'));

let prezzoInt = prezzoProd * prodRichiesti;
let ivaInt = prezzoInt * iva;
let prezzoIvato = prezzoInt + ivaInt;

let prezzoFinale = prezzoIvato - (prezzoIvato * sconto);

document.getElementById('return').innerHTML =`
Costo del prodotto ${prezzoProd}€ <br>
Ne stai acquistando ${prodRichiesti} <br>
Prezzo ${prezzoInt}€ più iva in % (${iva * 100}), per un totale di ${prezzoIvato}€ <br>
Prezzo scontato al ${sconto * 100}% : Il prezzo finale dei tuoi acquisti è di <strong>${prezzoFinale}€</strong> <br>
ARRivederci. 
`