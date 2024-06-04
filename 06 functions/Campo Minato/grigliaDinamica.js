//utilizziamo la stessa struttura della grigliaDinamica e creiamo campo minato con le seguenti regole:
//Scegliere la difficoltà: il gioco avrà sempre 16 bombe in 16 numeri casuali
//Easy -> 100 celle
//Hard -> 81 celle
//Very Hard -> 49 celle

//i numeri sono tutti celati: se la cella si colora di verde l'utente può andare avanti cliccandone un'altra, altrimenti si colora di verde ed io gioco termina.

//se il gioco dovesse terminare: tutte le bombe celate vengono rivelate e colorate di rosso, le caselle non sono più interagibili, e il gioco restituisce il numero di tentativi che l'utente ha commesso.


// to do list:
// - griglia di gioco
// - ID alle celle
// - generare bombe
// AL CLICK:
//  - verificare se ho pestato una bomba
//  - contare i tentativi
//  - verificare se ho finito i tentativi
// A fine gioco:
//  - stampo il risultato
//  - blocco la griglia
//  - mostra tutte le posizioni delle bombe
//  - appare un tasto di reset
// AL reset:
//  - cancello e apro una nuova griglia
//  - cancello tutte le bombe e ne genero di nuove

 //struttura del html
const main = document.querySelector('.container');
const start = document.querySelector('button');
const level = document.getElementById('level');
let gridLevels = [100, 81, 49];
const arrayPerUnicità =[]; 
let isGameOver = false;
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min +1))+ min;

//creare la griglia

start.addEventListener('click',play)
  
function play(){
  isGameOver = true;
  if (isGameOver) {
    start.innerText = 'RESET';
  }
  reset();
  creaGriglia();
  return
}

//funzione di reset AL TERMINE DEL GIOCO
function reset() {
  main.innerHTML = '';
}

//numerare i quadrati
function creaGriglia(maxSquare) {
  
  
  
  for (let index = 0; index <= maxSquare; index++) {
    const x = creaX(i, maxSquare)
    main.append(x);
    
  }
  
}

function creaX(){
  const x = document.createElement('div');
  x.className = 'square';
  x.style.width = generaCalc();
  x.style.height = generaCalc();
  const rand = unico(maxSquare);
  x.proprietàSalvaNumero  = rand;
  
}

//gestione click

function generaCalc() {
  return `calc(100% / ${gridLevels[level.value]}`;
}


 

//creo una funzione che renda l'estrazione di numeri unica e irripetibile
function unico(max){
  let randId;
//se randId non è incluso
  do{
    //lo estraggo
    randId = getRandomNum(1, max);
  } while (arrayPerUnicità.includes(randId));

  //lo pusho
  arrayPerUnicità.push(randId);
  return randId;
}
