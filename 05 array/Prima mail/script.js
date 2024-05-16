/*
chiedi la mail all' utente
verifica sia in lista
stampa un messaggio sull'esito di controllo
*/

const output = document.querySelector('.output');
//listo le mail
const listMail = ['loren@virgilio.com','ciao@gmail.com','alfa@libero.it','nonno@alice.com'];

//salvo in una variabile l'input dell'utente
const chiediMail = prompt('inserisci la tua mail');
//imposto un flag
let mailPresente = false;
//faccio un ciclo per leggere l'array delle mail
for (let index = 0; index < listMail.length; index++) {
  //se la mail è presente
  if (chiediMail === listMail[index]) {
    mailPresente = true;
    if (mailPresente) {
      output.innerHTML = `Benvenuto utente ${chiediMail} sei il numero ${index +1} della lista`;
    }
    
    
  }
}
//altrimenti fuori dal ciclo 
  if(!mailPresente) {
  output.innerHTML =`ops... non sei in lista`;  
}  
