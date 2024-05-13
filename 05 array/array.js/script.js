//QUANDO SI PARLA DI ARRAY, SI TRATTA DI CONTENITORI DI DATI: ELENCHI, CHE POSSONO ESSERE VUOTI,PIENI E DA RIEMPIRE

//la sintassi di un array molto semplicemente:

const nomi=['Paola','Michela','Stefania'];

console.log(nomi);

//se volessi leggere MICHELA? DEVO INSERIRE L'INDICE DELL'ELEMENTO da richiamare
console.log(nomi[1]);

//per aggiungere un elemento in coda al mio array uso push() e nelle parentesi di questo metodo inserisco il valore da appendere
nomi.push('Alessandra');

console.log(nomi);
console.log(nomi[3]);

//per conoscere la lunghezza di un array e per ciclarlo si usa il metodo length senza parentesi
console.log('lunghezza array contando da 1:',nomi.length);

//leggo l'ultimo elemento dell'arrey senza sapere quanto sia lungo chiedendo all'array la sua lunghezza "-1" per l'indicizzazione
console.log(nomi[nomi.length -1]);

//leggo tutti i nomi ciclandoli
console.log('-----ciclo l\'array-----');
for (let index = 0; index < nomi.length; index++) {
  console.log(nomi[index]);
  
}
