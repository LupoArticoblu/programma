//Le timing function sono funzioni con una specificità di utilizzo a tempo e possono avere molte utilità nel codice

//la prima che vediamo è la funzione setTimeout che attiva la funzione dopo un tot di tempo specifico usato come parametro.  La sintassi è questa

setTimeout(nomeFunzione, 3000); //tempo espresso in millisecondi

function nomeFunzione(){
  console.log('arrivato');
  }
console.log('partito');

//la funzione può essere sia dichiarata che anonima e i secondi possono anche essere salvati in una variabile e riutilizzati

const secondi = 1;

setTimeout(function(){
  console.log('anch\'io');
}, secondi * 1000);

//setIntervall invece attiva una funzione dopo un tot di tempo ma lo fa più volte utilizzando il parametro di tempo come distanza tra una ripetizione e l'altra. Stessa sintassi
/*
setInterval(altraFunzione,secondi * 1000);

function altraFunzione(){
  console.log('anche io');
  }
  */
 //Per fermare il ciclo altrimenti infinito di setIntervall salvo il risultato dello stesso in una variabile e la passo alla funzione clearInterval
 
 let cont =0;
 const limit =10;
 
 const altri = setInterval(function() {
   console.log(++cont);
   
  if (cont === limit) {
     clearInterval(altri);
     }
  },secondi * 1000)
          
//facciamo partire questa azione solo dopo aver scatenato un evento
     
let contatore =0;
document.querySelector('.via').addEventListener('click', start);
//funzione start
function start(){
  //quest'azione viene avviata dopo il momento del click, senza il delay forzato del setInterval
  console.log('via');
  //anche il primo conteggio lo facciamo in relazione al momento in cui viene cliccato il button,asincrono
  console.log(++contatore);
  //salviamo in una variabile il set interval
  const clock = setInterval(function(){
    console.log(++contatore); 
    if (contatore === limit) {
      clearInterval(clock);
      console.log('fine');
      contatore =0;
    }
  },1000)
}

//creiamo un cronometro

const inizio = document.querySelector('.inizia');
const crono = document.querySelector('.crono');
const fine = document.querySelector('.fine');
const stopi = document.querySelector('.stop');
let num = 0;
let milli = 0;
let a;
conter(num,milli);


inizio.addEventListener('click', play);

fine.addEventListener('click', pause);
stopi.addEventListener('click', stopp);

function play() {
  //verifica per evitare di cliccare più volte "inizio"
  if (!a) {
    a = setInterval(function(){
      conter(num,milli++)
      if (milli > 59) {
        num++
        milli=0;
      }
    },10)
  }
}

function pause() {
  clearInterval(a);
  a = null;
} 

function stopp() {
  pause();
  num =0;
  milli = 0;
  conter(num,milli);
}

function conter(number, millinumber) {
  if (number < 10) number = '0' + number;
  if (millinumber < 10) millinumber = '0' + millinumber;
  crono.innerHTML = `${number}:${millinumber}`;
}

//countdown
const main = document.querySelector('main');
const element = document.createElement('h3');
const element2 = document.createElement('h5');
const orologio = document.createElement('h1');
let col;
let colo;
let numero = 10;
let contero = 0;

countDown();
countUP();

function countDown(){
  element.innerHTML= numero;
  col = setInterval(function(){
    --numero;
    //ATTENZIONE: alcuni browser hanno un bug di visualizzazione che porta il numero a -1 e non a 0, forziamo il countDown;
    if (numero < 0) numero = 0;
    
     if (numero === 0) {
     clearInterval(col);
     }
    element.innerHTML = numero;
  },1000);
}

//fermo il countDown urilizzando setTimeout
  // setTimeout(function(){
  //   clearInterval(col);
  //   //10.000 per arrivare a 0 o numero * 1000
  // },10000)
    
main.parentNode.insertBefore(element, main.nextElementSibling);

// function countUP() {
//   element2.innerHTML = contero;
//   colo = setInterval(function(){
//     contero++;
//   if (contero === 10) {
//     clearInterval(colo);
//   }
//   element2.innerHTML = contero;
//   },1000)
// }
// utilizziamo setTimeout per questo conteggio


function countUP() {
  element2.innerHTML = contero;
  if (contero < 10) { // Usa 10 per la condizione
    setTimeout(function() {
      contero++;
      element2.innerHTML = contero;
      countUP();
    }, 1000);
  }
}

element.parentNode.insertBefore(element2, element.nextElementSibling);

//stampiamo un orologio in pagina
printClock(getClock());

//aggiorno l'ora
setInterval(function(){
  printClock(getClock());
},1000)

//stampo l'ora
function printClock(orario) {
  orologio.innerHTML = orario;
}

//prendo l'ora e la ritorno
function getClock(){
  
  const date = new Date();
  let ora =date.getHours();
  let minuti =date.getMinutes();
  let secondi =date.getSeconds();
  //if per gli 0
  if (ora <10) ora = '0' + ora;
  if (minuti <10) minuti = '0' + minuti;
  if (secondi <10) secondi = '0' + secondi;
  
  return `${ora}:${minuti}:${secondi}`
}
  




element2.parentNode.insertBefore(orologio, element2.nextElementSibling);