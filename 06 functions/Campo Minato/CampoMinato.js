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
const externa = document.querySelector('main');
const main = document.querySelector('.container');
const rewind = document.querySelector('.contain');
const start = document.querySelector('button');
const level = document.getElementById('level');
const msg = document.createElement('h3');
let gridLevels = [100, 81, 49];
//variabile di setup (scritta come in php)
const BOMBE = 16; 
let SCORE = 0;
let positionBombs = [];
const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min +1))+ min;

//creare la griglia

start.addEventListener('click',play)

function play(){
  rewind.style.display = 'none';
  reset();
  const maxSquare = gridLevels[level.value];
  creaGriglia(maxSquare);
  positionBombs = bombs(maxSquare);
}

//funzione di reset AL TERMINE DEL GIOCO
function reset() {
  start.innerText = 'RESET';
  main.innerHTML = '';
  SCORE = 0;
  isGameOver = true;
  msg.innerHTML ='';
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
  x.addEventListener('click', handleClick); //nome funzione di call back di un evento
  //tento di rendere incliccabile la cella una seconda volta
  const clicked = ()=>{
    x.removeEventListener('click', handleClick);
  }
  x.addEventListener('click', clicked);
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
  msg.classList.add('msg');
  const celle = document.getElementsByClassName('square');
  if (isWin) {
    
    msg.innerHTML = 'HAI VINTO!';
    console.log('win');
  }else{
    
    msg.innerHTML = `GAME OVER hai totalizzato ${SCORE} PUNTI su ${celle.length - BOMBE}`;
    console.log('game over');
  }
  rewind.style.display = 'block';

  externa.insertAdjacentElement('afterend',msg);
  explode();
  const end_lvl = document.createElement('div');
  end_lvl.className = 'end-game';
  main.append(end_lvl);
}

//mostro le bombe
function explode(){
  //prendo la collection di celle
  const celle = document.getElementsByClassName('square');
  //la ciclo
  for (let index = 0; index < celle.length; index++) {
    const cell = celle[index];
    //se idCell è presente nell'arrAY bombe gli aggiungo la classe bomb
    if (positionBombs.includes(cell.idCell)) {
      cell.classList.add('bomb');
    }
  }
}
