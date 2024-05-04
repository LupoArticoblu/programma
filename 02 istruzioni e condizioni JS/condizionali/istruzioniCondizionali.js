// per creare una condizione basica dobbiamo usare "if - else", ecco un esempio con i valori booleani:

const booleani = true;//possiamo usare anche 1(true) e 0(false)

if(booleani){
  console.log(' il valore booleano è settato su True, quindi restituisce VERO');
}else{
  console.log(' il valore booleano è settato su false, quindi restituisce FALSO');
}

//gli OPERATORI RELAZIONARI mettono a confronto 2 valori e possono essere: "==" uguaglianza(= è di assegnazione), "!=" diversità, "<" minore, ">" maggiore, "<=" minore o uguale, ">=" maggiore o uguale; 

//in fine abbiamo le identità che vanno verificate con "===" (uguaglianza di tipo e valore) o "!==" (disuguaglianza di tipo e valore)

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

