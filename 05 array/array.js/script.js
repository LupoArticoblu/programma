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

const list2 = document.querySelector('.list2');
//ATTENZIONE
//logica del ciclo messa in pratica su un array: il ciclo viene effettuato ogni volta, se volessimo stampare in pagina un nome riconosciuto all'interno dell' array in una posizione qualsiasi(che non sia l'ultima) non può essere interpellato così:
for (let index = 0; index < nomi.length; index++) {
  if (nomi[index]=== 'Michela') {
    const list = document.createElement('li');
    list.innerHTML = `Michela c'è....`;
    list2.append(list);
  }else{
    const list = document.createElement('li');
    list.innerHTML = `Michela non c'è....`;
    list2.append(list);
  }
}
//il ciclo in questo caso è composto da una lista che vede michela solo nella posizione in cui esiste il nome "Michela", questo significa che con un solo output di testo michela sarebbe stata completamente ignorata e dopo aver letto "Alessandra" il nostro sostema avrebbe riportato: "Michela non c'è..."

const put = document.querySelector('.output');

for (let index = 0; index < nomi.length; index++) {
  if (nomi[index]==='Michela') {
    put.innerHTML = `Michela c'è....`;
  }else{
    put.innerHTML = `Michela non c'è....`;
  }
}

//IL METODO CORRETTO DI FARE APPELLO AD UN ELEMENTO CONTENUTO IN UN ARRAY,SENZA FERMARE IL CICLO, è UTILIZZANDO UN VALORE BOOLEANO

const put2 = document.querySelector('.output2');
let check = false;
let i;
//ciclo
for (let index = 0; index < nomi.length; index++) {
  //condizione del ciclo: se c'è michela in qualsiasi posizione
  if (nomi[index]==='Michela'){
    i = index;
    check = true;
    //se la precedente condizione è vera, il valore booleano si avvera, e se la condizione è vera: Michela c'è, altrimenti no
    if (check) {
    put2.innerHTML = `Michela c'è in posizione ${i} partendo da 0`;
   }else{
    put2.innerHTML = `Michela non c'è....`;
        
  }
 } 
}

//se volessi far inserire altri nomi chiedendoli all'utente, il metodo push() non cambia e la logica la conosciamo già

const addCri = prompt('aggiungi un nome al tu array');
nomi.push(addCri);
console.log('--array con nome inserito dall\'utente--');
for (let index = 0; index < nomi.length; index++) {
 console.log(nomi[index]);
}