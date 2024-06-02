//Operatore ternario: si utilizza come condizione "else if" e va a valorizzare una variabile, è più compatto e funziona cosi:

let isGiorno = false;
//la condizione isGiorno, se vera riporterà il primo valore in saluto altrimenti il secondo
const saluto = (isGiorno === true) ? "Buongiorno" : "Buonasera";

console.log(saluto);