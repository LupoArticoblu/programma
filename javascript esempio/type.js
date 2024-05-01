//utilizziamo il dom per riconoscere l'oggetto genitore e lo utilizziamo: DOCUMENT è IL GENITORE DI TUTTO IL DOM

document.writeln("HELLO JAVASCRIPT by document");

//utilizziamo un metodo che ha come genitore JS stesso infatti non ha oggetto da dichiarare: alert che viene usato tipicamente come messaggio d'errore ed è BLOCCANTE

alert("hello js by alert");

//anche la console/terminale è un oggetto che ha come metodo: LOG()

console.log("hello js by console")

//un altro modo è innestrare in un elemento dell'html i valori che vogliamo vengano letti 

document.getElementById('saluto').innerHTML= 'hello JS in getElement';

//operatori matematici

let n1 = 14;
let n2 = 7;

//addizione
let somma = n1 + n2;
console.log('somma', somma);

//sottrazione
let sottrazione = n1 - n2;
console.log('sottrazione',sottrazione);

//moltiplicazione
let moltiplicazione = n1 * n2;
console.log('moltiplicazione', moltiplicazione);

//divisione
let divisione = n1 / n2;
console.log('divisione', divisione);

//cosa succede se una stringa si aggiunge ad un numero? la somma diventa una STRINGA e i 2 fattori non si addizionano, ma si accostano
const stringaNumero = "10";

somma = stringaNumero + n2;
console.log("somma con stringaNumero", somma);

//ATTENZIONE in sottrazione JS capisce di ricevere come stringa un fattore numerico (in questo caso "10") e opera un calcolo restituendo un NUMERO
sottrazione = stringaNumero - n2;
console.log("sottrazione con stringaNumero", sottrazione);
//PS:la sottrazione di 2 stringhe mi riporterà un valore NaN(not a number)

