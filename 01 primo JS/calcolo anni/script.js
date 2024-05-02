//-----------stampa nome in pagina---------

const nomeUtente = prompt('come ti chiami?');

document.getElementById('nome').innerHTML = nomeUtente;







//-----calcolo anni con log----------

//chiedo all'utente la data di nascita e restituisco l'età

const annoAttuale = 2024;

//salvo in una const la data inserita dall'utente con un prompt
const dataNascita = prompt('anno di nascita?');
console.log(dataNascita);

//in una variabile faccio la sottrazione dell annoAttuale con la data di nascita
const calcoloAnni = annoAttuale - dataNascita;

//stampo
document.getElementById('risultato').innerHTML = calcoloAnni;




//---reminder: per sapere che tipo di dato abbiamo utilizziamo "typeof"---

console.log(typeof annoAttuale);