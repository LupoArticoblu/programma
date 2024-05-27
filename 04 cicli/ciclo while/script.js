//Il ciclo while funziona così: finchè la condizione è vera, continua col ciclo, fermati quando la condizione diventa falsa al contrario di for(utile per eseguire cicli a conteggio) questo viene chiamato ciclo finito ed è pratico perchè i suoi cicli hanno una condizione chr non dipende forzatamente da un contatore

const nomi=[ugo, filippo, martina, anna];

//ciclo for(il ciclo ha un proprio contatore che viene incrementato in condizione)
for (let index = 0; index < nomi.length; index++) {
  console.log('ciclo for',nomi[index]);
}

//ciclo while(il ciclo non ha un contatore e questo dev'essere definito fuori dal while ed incrementato nel ciclo stesso)
let i = 0;
while (i < nomi.length) {
  console.log('ciclo while',nomi[i]);
  //ATTENZIONE dimenticare l'incremento che porta alla fine del ciclo porta inevitabilmente ad un ciclo infinito
  i++;
}

//il ciclo DO WHILE invece FUNZIONA COME IL WHILE MA, a differenza del ciclo while che può anche non essere mai eseguito se la condizione risulta falsa a prescindere es:
/*
let i = 6;  N.B.
while (i < nomi.length) {
  console.log('ciclo while',nomi[i]);
  i++;
}
  */

//do while viene sempre eseguito almeno una volta(undefined), anche se la condizione è falsa. E ha questa sintassi:
let counter = 6;
do{
  console.log('do while', nomi[counter]);
  counter++;
} while(counter<nomi.length);