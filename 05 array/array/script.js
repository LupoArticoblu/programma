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

console.log(nomi);
//per rimuovere l'ultimo elemento da un array, bisogna usare la funzione pop(), quest'elemento verrà restituito e nel caso salvato
const nomiMeno1 = nomi.pop();
console.log(nomi);
console.log(nomiMeno1);

console.log(nomi);
//la funzione splice() invece rimuove uno o più elementi ma i parametri inseriti all'interno delle parentesi indicano indice di partenza e quantità di elementi da rimuovere
const nomiMeno2 = nomi.splice(0, 1);
console.log(nomi);
console.log(nomiMeno2);


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

//const addCri = prompt('aggiungi un nome al tu array');
//nomi.push(addCri);
console.log('--array con nome inserito dall\'utente--');
for (let index = 0; index < nomi.length; index++) {
 console.log(nomi[index]);
}

//come effettuare la somma di tutti i numeri contenuti in un array
const num = [1,2,3,4,5,6,7];
//valorizzo un let a 0 per identificarlo come numero da incrementare
let sum = 0;

//sommo e stampo il totale
for (let index = 0; index < num.length; index++) {
    //sommo ad ogni ciclo l'indice e lo salvo in sum
    sum += num[index];
        
}  
console.log(sum);
console.log('----random sum-----');

//array avvalorato da numeri random
const num2 = [];
let rand = 0;

for (let index = 0; index < 5; index++) {
  num2.push(Math.ceil(Math.random()* 100));
  console.log(num2[index]);
  rand += num2[index];
}

console.log(rand);

//---programma che chiede 5 nomi all'utente e li sava in un array---

const nomiUtente = [];
const quantitaNomi = 5;

for (let index = 0; index < quantitaNomi; index++) {
  const nomiChiesti = prompt(`inserisci un nome : ${index + 1} di  5`);
  nomiUtente.push(nomiChiesti);
  
}
console.log(nomiUtente);

//Destrutturare un array: definisco l'array, in un'altra variabile uso le parentesi quadre per dare nomi ai valori che voglio prendere da quell'array, basandomi sulle posizioni e come valore richiamo l'array

const casa =['via martinelli','18','busto arsizio','21052','Varese'];
//const [indirizzo,civico,comune] = casa;

console.log(indirizzo,civico,comune);

//e se volessi leggere solo indirizzo e comune? salto un indice utilizzando uno spazio
const [indirizzo, ,comune] = casa;

//l'operatore spread è rappresentato da 3 punti "..." e consente di espandere il contenuto di un array. Può essere molto utile per compiere una serie di operazioni                            -merging: unire parti di array.                             -cloning: creare una copia di un array

const datiPersonali = ['alberto','lanzina','28'];

let arrayMerge = [...datiPersonali,...casa];
console.log(arrayMerge);

const arrayCloned = [...datiPersonali];
console.log(arrayCloned);

