// per creare una condizione basica dobbiamo usare "if - else", ecco un esempio con i valori booleani:

const booleani = true;//possiamo usare anche 1(true) e 0(false)

if(booleani){
  console.log(' il valore booleano è settato su True, quindi restituisce VERO');
}else{
  console.log(' il valore booleano è settato su false, quindi restituisce FALSO');
}

//gli OPERATORI RELAZIONARI mettono a confronto 2 valori e possono essere: "==" uguaglianza(= è di assegnazione), "!=" diversità, "<" minore, ">" maggiore, "<=" minore o uguale, ">=" maggiore o uguale;

//l'operatore MODULO "%" restituisce il resto di una divisione tra 2 operandi

const se = 7;
const qu = 14;

console.log('il risultato di modulo tra 14 e 7 è ',qu % se);

//infine abbiamo le identità che vanno verificate con "===" (uguaglianza di tipo e valore) o "!==" (disuguaglianza di tipo e valore)

const x = 3;
const y = 4;

if(x === "3"){
  console.log('x uguale a 3 per tipo e valore');
}else{
  console.log('x non è uguale a 3 per tipo e valore');
}

if(x == "3"){
  console.log('x uguale a 3 per valore ma non necessariamente per tipo');
}else{
  console.log('x non è uguale a 3 per valore');
}

if(x < y){
  console.log('x è minore a y');
}else if(x > y){
  console.log('x è maggiore a y');
}else{
  console.log('x e y sono uguali');
}

// OPERATORI LOGICI BINARI sono quelli che ti permettono di unire e verificare più condizioni e sono: "&&" che restituisce vero solo se entrambi gli operandi sono veri, "||" che restituisce vero se uno dei due operandi lo è;


const bool = false;
const bool2 = true;

if(bool && bool2){
  console.log('sono entrambi veri');
}else{
  console.log('non sono entrambi veri');
}

if(bool || bool2){
  console.log('uno tra i 2 è vero');
}else{
  console.log('entrambi sono falsi');
}

//l'operatore NOT esprime il contrario di qualcosa: non è vero che è vero, quindi è falso! (!true === false), una logica così possimo trovarla nelle pagine personali di un sito, ove bisogna loggarsi

if(!bool2){
  console.log('devi essere loggato per accedere al sito');
}else{
  console.log('benvenuto utente001');
}

//-----pari o dispari in log----

const pari_dispari = Math.floor(Math.random() * 10) + 1;
//nella condizione if posso usare il confronto "=== 0" ma dato che 0 e 1 sono anche traducibili in valori booleani true e false, uso NOT
if (!(pari_dispari % 2)) {
  console.log(pari_dispari,'è pari');
} else {
  console.log(pari_dispari,'è dispari');  
}


//------- PIù LUNGA O PIù CORTA? ----------------

const parola1 = prompt('Inserisci la prima parola');
const parola2 = prompt('inserisci un\'altra parola');
console.log(parola1 < parola2);

//per far questa operazione il programma deve capire cosa vogliamo confrontare: in questo caso LA LUNGHEZZA DELLA STRINGA, per farlo utilizziamo la proprietà LENGTH (altrimenti si baserà sul codice ASCII e riconoscerà la posizione dei valori alfanumerici)
if (parola1.length < parola2.length) {
  document.getElementById('inside').innerHTML =`
  la prima parola: <strong>${parola1}</strong>, è più corta della seconda: <strong>${parola2}</strong>  `
}else if(parola1.length > parola2.length){
  document.getElementById('inside').innerHTML =`
  la prima parola: <strong>${parola1}</strong>, è più lunga della seconda: <strong>${parola2}</strong>  `
}else{
  if (parola1 === parola2) {
    document.getElementById('inside').innerHTML =`
    hai inserito 2 volte la stessa parola: <strong>${parola1}</strong> / <strong>${parola2}</strong>`
    
  } else {
    document.getElementById('inside').innerHTML =`
    ambedue le parole inserite hanno la stessa lunghezza <strong>${parola1}</strong> e <strong>${parola2}</strong>`
  }
}

//--------chi è più vecchio? -------------

const giocatore1 = parseInt(prompt('età giocatore 1'));
const giocatore2 = parseInt(prompt('età giocatore 2'));
let risultato;

//confrontiamo l'età dei due giocatori e nel risultato salviamo chi dei 2 è il più vecchio( annidando una variabile per sapere la differenza di età)

if (giocatore1 < giocatore2) {
  let anzianità = giocatore2 - giocatore1;
  risultato = `Giocatore 2, sei più vecchio di giocatore 1 di ${anzianità} anni!`
} else if(giocatore1 > giocatore2){
  let anzianità = giocatore1 - giocatore2;
  risultato = `Giocatore 1, sei più vecchio di giocatore 2 di ${anzianità} anni!`
} else{
  risultato = `Avete gli stessi anni!`
}

//stampo la variabile risultato

document.getElementById('ins').innerHTML = risultato;