// //Il ciclo while funziona così: finchè la condizione è vera, continua col ciclo, fermati quando la condizione diventa falsa al contrario di for(utile per eseguire cicli a conteggio) questo viene chiamato ciclo finito ed è pratico perchè i suoi cicli hanno una condizione chr non dipende forzatamente da un contatore

// const nomi=['ugo', 'filippo', 'martina', 'anna'];

// //ciclo for(il ciclo ha un proprio contatore che viene incrementato in condizione)
// for (let index = 0; index < nomi.length; index++) {
//   console.log('ciclo for',nomi[index]);
// }

// //ciclo while(il ciclo non ha un contatore e questo dev'essere definito fuori dal while ed incrementato nel ciclo stesso)
// let i = 0;
// while (i < nomi.length) {
//   console.log('ciclo while',nomi[i]);
//   //ATTENZIONE dimenticare l'incremento che porta alla fine del ciclo porta inevitabilmente ad un ciclo infinito
//   i++;
// }

// //il ciclo DO WHILE invece FUNZIONA COME IL WHILE MA, a differenza del ciclo while che può anche non essere mai eseguito se la condizione risulta falsa a prescindere es:
// /*
// let i = 6;  N.B.
// while (i < nomi.length) {
//   console.log('ciclo while',nomi[i]);
//   i++;
// }
//   */

// //do while viene sempre eseguito almeno una volta(undefined), anche se la condizione è falsa. E ha questa sintassi:
// let counter = 6;
// do{
//   console.log('do while', nomi[counter]);
//   counter++;
// } while(counter<nomi.length);

// console.log('-------------');

//  //ricreiamo un programma Biglietteria col ciclo while
//  const nomePasseggero = prompt('Digitare Nome');
//  let etaPasseggero;
//  let isValid = false;
//  let start = true;
//  //cicliamo la condizione di partenza
//  while (!isValid) {
//    if (start) {
//      etaPasseggero = parseInt(prompt('inserisci la tua età'));
//      start = false;
//    }
//    //nella condizione inseriamo il metodo isNaN() che verifica se si tratta o meno di un numero
//    if (isNaN(etaPasseggero)) {
//      etaPasseggero = parseInt(prompt('Inserisci il numero corrispondente alla tua età'));
//    }else if(etaPasseggero < 0 || etaPasseggero > 120){
//      etaPasseggero = parseInt(prompt('Inserisci il numero tra 0 e 120 corrispondente alla tua età'));
//    } else{
//     isValid =true;
//    }
//  }

//  const trattaPercorsa = parseInt(prompt('Digitare la destinazione, in km da percorrere'));
//  const bigliettoKM    = 0.21;

//  const costoBiglietto = bigliettoKM * trattaPercorsa;

//  const costoBig20 = costoBiglietto - (costoBiglietto * 0.2);

//  const costoBig40 =
//  costoBiglietto - (costoBiglietto * 0.4);

//  console.log('costo del biglietto senza sconti', costoBiglietto);

//  if(etaPasseggero < 18){
//    console.log('utente20%');
//    document.getElementById('biglietto').innerHTML +=` Buon viaggio ${nomePasseggero}, hai diritto ad uno sconto del 20%. Prezzo finale: ${costoBig20.toFixed(2)}€ 
//    grazie e arrivederci.`
//  }else if(etaPasseggero >= 65){
//    console.log('utente40%');
//    document.getElementById('biglietto').innerHTML +=` Buon viaggio ${nomePasseggero}, hai diritto ad uno sconto del 40%. Prezzo finale: ${costoBig40.toFixed(2)}€ grazie e arrivederci`
//  }else{
//    console.log('utenteNaN%');
//    document.getElementById('biglietto').innerHTML +=` Buon viaggio ${nomePasseggero}, non ci sono sconti disponibili per te. Prezzo finale: ${costoBiglietto}€ `
//  };

// console.log("-----------");

// //ricreiamo il programma estrattore di nomi

// const btn = document.querySelector('button');
// const estratti =[];

// btn.addEventListener('click', function(){
//   //valore iniziale dei nomi estratti
//   let nomeEstratto = false;
//   if (estratti.length < nomi.length) {
    
//     while (!nomeEstratto) {
//       //1 estrarre un num compreso tra 0 e l'ultimo elemento dell'array
//       const randomly = Math.floor(Math.random() * nomi.length);
//       //2 se il nome estratto è già presente nell'array di estratti, estraggo un altro numero
//       if(!estratti.includes(nomi[randomly])){
//         //3 ad ogni nuovo nome aggiungo tale nome nell'array di estratti
//         estratti.push(nomi[randomly]);
//         nomeEstratto = true;
//         console.log(nomi[randomly], estratti);
//       }
//     }
//   }else{
//     //4 se tutti sono stati estratti termino il ciclo
//     console.log('FINE nomi', estratti);
//   }
 
// })

// //Ora parliamo di Switch Case: lo switch è uno strumento poco usato ma molto potente ed evita le condizioni troppo ripetute di ELSE IF e ad ogni condizione si usa il break eccetto per l'ultima 

// //la condizione è chiamata key in questo caso
// const key = 'blue';
// //definiamo il testo che riceveremo di risposta dal programma
// let text;
// //la sintassi dello switch
// switch (key) {
//   case 'blue':
//     text = 'il cielo è blu';
//     break;
  
//   case 'red':
//     text = 'il cielo è rosso';
//     break;

//   default:
//     text = 'il cielo è grigio';
//     break;
// }

// console.log(text);

//conservare una lista di nomi e segnalare l'occorrenza più frequente

const array =[];
const input = document.querySelector('input');

input.addEventListener('keypress', function (event) {
  
  if(event.code != 'Enter') return;
  if(input.value == '') return;

  array.push(input.value);

  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerText = input.value;
  document.querySelector('ul').append(li);

  let counter = 0;
  let item = array[0];
  let max = 1;
  const el = [];

  for (let index = 0; index < array.length; index++) {
    let val = array[index];

    if (!el[val]) {
      el[val] = 1;
    }else{
      el[val]++;
    }
    
    for (let j = index; j < array.length; j++) {
      if (array[index]===array[j]) {
        counter++;
        if (max < counter) {
          max = counter;
          item = array[index];
        }
      }
    }
    //resettiamo il counter perchè vogliamo sapere quante volte viene visto un elemento
    counter =0;
  }
  const alert =document.getElementsByClassName('alert')[0];
  alert.classList.remove('d-none');
  alert.classList.add('d-flex');
  alert.querySelector('span:first-child').innerText =item;
  alert.querySelector('span:last-child').innerText =max;

  input.value = '';
  console.log(`${item} trovato ${max} volte`);

})