
// la funzionalità di Date() comprende, in formato internazionale tutte le info relative all'ora e data attuale del pc.

//ora istanziamo l'oggetto Date; la sintassi prevede di usare "new", ovvero: crea un "nuovo" oggetto Date()
const data = new Date();

console.log(data);

//essendo un oggetto, Date ha i suoi metodi tipo:
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());


//notiamo che le date e le ore a una cifra non hanno uno 0 d'avanti come da formato internazionale.... rimediamo!

let giorno = data.getDate();
//ATTENZIONE alcuni metodi sono su base 0 e per precisare abbiamo bisogno di "+ 1" come in getMonth
let mese = data.getMonth() + 1;

let ore = data.getHours();
let minuti = data.getMinutes();
let secondi = data.getSeconds();

//posso anche scrivere gli if su una singola riga senza usare le graffe se la condizione non ha else
if (giorno < 10) giorno = "0" + giorno;
if (mese < 10) mese = "0" + mese;
if (ore < 10) ore = "0" + ore;
if (minuti < 10) minuti = "0" + minuti;
if (secondi < 10) secondi = "0" + secondi;

//stampiamo in pagina un orologio {statico}
let clock;

clock=`
${giorno}/${mese}/${data.getFullYear()} <br>
${ore}:${minuti}:${secondi}`;

document.getElementById('date').innerHTML = clock;

//PS. il metodo getTime() mi restituisce in millisecondi il tempo trascorso dal "1 gennaio 1970" ad Oggi




//--------come sapere quanti giorni sono passati tra 2 date?-------

const Michela = new Date('1989-10-01');
const Lorenzo = new Date('1994-10-04');

let diffMillisecondi = Michela - Lorenzo;

//per evitare un numero negativo e sapere quale data viene prima:

if(Lorenzo > Michela) diffMillisecondi = Lorenzo - Michela;

//nel console.log facciamo l'operazione necessaria per trovare i giorni trascorsi tra una data e l'altra

console.log((((diffMillisecondi / 1000) / 60) / 60) / 24 );