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
//variabile di setup (scritta come in php)
const BOMBE = 16; 
let SCORE = 0;
let positionBombs = [];
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
  const maxSquare = gridLevels[level.value];
  creaGriglia(maxSquare);
  positionBombs = bombs(maxSquare);
}

//funzione di reset AL TERMINE DEL GIOCO
function reset() {
  main.innerHTML = '';
  SCORE = 0;
}

//numerare i quadrati
function creaGriglia(maxSquare) {
  const gridSize = Math.sqrt(maxSquare);
  const cellSize = (350 / gridSize);
  main.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
  for (let index = 1; index <= maxSquare; index++) {
    const x = creaX(index, cellSize);
    main.append(x);
    
  }
  
}

function creaX(idCell, cellSize){
  const x = document.createElement('div');
  x.className = 'square';
  x.classList.add('square');
  //ATTENZIONE: ID DELLA CELLA RESTITUISCE UNA STRINGA MENTRE NOI IN POSITION BOMBS CERCHEREMO UN NUMERO
  x.idCell = idCell;
  x.innerHTML= idCell;
  x.style.width = `${cellSize}px`;
  x.style.height = `${cellSize}px`;
  x.addEventListener('click', handleClick) //nome funzione di call back di un evento
  return x
}

//generare bombe
function bombs(maxSquare){
 const creaBomba =[];
  //ad ogni ciclo genero una bomba random: se presente nell array la ignoro e continuo il ciclo fino ad avere 16 bombe
  while (creaBomba.length < BOMBE) {
    const bomb = getRandomNum(1, maxSquare);
    if (!creaBomba.includes(bomb)) {
      creaBomba.push(bomb);
    }
  }
  console.log(creaBomba);
  return creaBomba;
}

//gestione click

function handleClick() {
  console.log(this.idCell);
  //uso this e prendo la proprietà custom "id" di x
  if (!positionBombs.includes(this.idCell)) {
    //verifica tentativi e contali
    this.classList.add('field');
    SCORE++;
    //collection che contiene tutte le celle che ci sono
    const celle = document.getElementsByClassName('square');
    if(SCORE === celle.length - BOMBE){
      
      //game over
      endGame(true);
    }
  }else{
    //game over
    endGame(false);
  }
}

function endGame(isWin) {
  let msg = document.createElement('h3');
  const celle = document.getElementsByClassName('square');
  if (isWin) {
    msg.innerHTML = 'HAI VINTO!';
    console.log('win');
  }else{
    msg.innerHTML = `GAME OVER hai totalizzato ${SCORE} PUNTI su ${celle.length - BOMBE}`;
    console.log('game over');
  }
  main.append(msg);
}

