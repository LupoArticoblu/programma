//le funzioni sono blocchi di codice riutilizzabili tutte le volte che vengono invocate e possono svolgere una funzione specifica ma con tante possibilità diverse, oltre ad avere funzioni standard in JS (es. Math.random(), add(), push(), length) possiamo creare le nostre funzioni personalizzate che inseriremo alla fine del codice per rendere ordinata la lettura

//sintassi:ATTENZIONE i parametri qui non servono per delle condizioni ma per passare informazioni(o argomenti)...
function name(params) {
  
}
//come scritto in precedenza le funzioni vengono invocate, finchè ciò non succede sono latenti all'interno del codice e non vengono viste dal DOM

saluto();


function saluto() {
  console.log('ciao');
}

//le informazioni(o argomenti) come appena visto non sono obbligatorie ma vediamo quale ruolo hanno

salutoPersonale('buongiorno');
salutoPersonale('buonasera');
//chiamo la stessa funzione, ma ta le parentesi uso argomenti diversi ed ottengo risultati diversi
function salutoPersonale(mioSaluto){
  console.log(mioSaluto);
}

//test apprendimento

Somma(1);

function Somma(parametroTest){
  console.log(1 + parametroTest);
}
//ATTENZIONE la sintassi fa la differenza tra tipi(num e string)


//le istruzioni non hanno bisogno di essere dichiarate precedentemente, anche perchè funzioneranno solo all'interno della function e possono essere più di 1
console.log
('//qui ricevo un valore undefined perchè non ho dichiarato nulla come 3zo argomento');

salutoCPU('Gianni', 'arrivederci');
salutoCPU('Carla', 'a', 'presto');

function salutoCPU(user, mioSaluto, a) {
  console.log(user, mioSaluto, a);
}

//le informazioni, ovviamente possono essere di tutti i tipi
addizione(9,9);

function addizione(num1,num2) {
  //ci scrivo dentro il mio codice e lo definisco come voglio
  const out = document.querySelector('.output');
  const somma = num1 + num2;

  out.innerHTML=`la somma di ${num1} + ${num2} è ${somma}`;
}

//interazione con un array
const arrayNumeri=[1,2,3,4,5,6,7,8,9,10];

nome(arrayNumeri);

function nome(array) {
  const list= document.querySelector('.list');
   let somma=0;
  for (let index = 0; index < array.length; index++) {
    let item= document.createElement('li');
    item.innerHTML=array[index];
    list.append(item);

    somma += array[index]; 
  }
  list.innerHTML += `<li>la somma totale è ${somma}</li>`;
}

//per restituire un valore si usa Return

function pariDispari(numero) {
  if (numero % 2 === 0) {
    //uso return
    return 'PARI'
    //Attenzione nel momento in cui un return viene letto tutta la funzione si blocca ed il programma esce da essa infatti:
    console.log('dopo return');
  }
  //non occore l'else perchè il resto del blocco non viene eseguito SE la condizione precedente è vera

    //invece questo log verrà letto solo se il precedente return non corrisponderà all'istruzione dell'if
    console.log('prima del return');
    return 'DISPARI'
 
}
//l'informazione la salvo in una mia costante e passo come argomento un numero
const risultato = pariDispari(4);

console.log('risultato di pari o dispari è: ', risultato);

//ricorda: la visibilità di una funzione è data dal valore di return ma non può esser letto direttamente perchè il contenuto di una funzione non è mai visibile all'esterno di essa e và salvato in una variabile
//esempio

function SommaNum(num1,num2) {
  const result = num1 + num2;

  return result;
}

const varSalvataDiReturn = SommaNum(15,18);

console.log(varSalvataDiReturn); //qui la soluzione è salvata e riporterà 32

console.log(result); //qui avrò come risposta undefined perchè result oltre a non essere globale non è salvato da nessuna parte



//Riprendiamo in esame il carosello di 2 lezioni fà

const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

for(let i = 1; i <= numImages; i++){
  sliderHtml += `
      <img  class="item" src="img/0${i}.jpg" alt="">
  `;
  thumbsHtml += `
      <img  class="item-thumb" src="img/0${i}.jpg" alt="">
  `;
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');

prev.addEventListener('click',function(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages++;
  if(counterImages === numImages) counterImages = 0;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
})
next.addEventListener('click',function(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages--;
  if(counterImages < 0) counterImages = numImages - 1;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
})

//centralizziamo l'azione nextPrev

function nextPrev(isNext) {
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  if (isNext) {
    counterImages--;
    if(counterImages < 0) counterImages = numImages - 1;  
  }else{
    counterImages++;
    if(counterImages === numImages) counterImages = 0;
  }
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
}

//ed utiliziamola con argomenti booleani all'interno di next e prev

next.addEventListener('click',nextPrev(true)); //ATTENZIONE: questa forma contratta non funziona perchè verrebbe chiamata al caricamento della pagina; in questo caso e dobbiamo usare sempre il richiamo di una funzione anonima come segue 
prev.addEventListener('click',function(){nextPrev(false)});  