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
let col;
let numero = 10;

countDown()

function countDown(){
  element.innerHTML= numero;
  col = setInterval(function(){
    --numero;
    if (numero === 0) {
      clearInterval(col);
    }
    element.innerHTML = numero;
  },1000);
}

  
    
main.parentNode.insertBefore(element, main.nextElementSibling);





