// creiamo una griglia 8*8 con <li> generati dinamicamente
// ogni quadrato ha un numero random da 1 a 64
//cliccando su un quadratino mi poppa il numero del quadrato
//se pari sarà verde aoltrimenti rosso

//struttura del html
const container = document.querySelector('.container');
const start = document.querySelector('button');
let elPerRow;
const arrayPerUnicità =[]; 

//creare la griglia

start.addEventListener('click',function() {
  //ATTENZIONE: LA DICHIARAZIONE DI QUALCOSA VA SEMPRE FATTA PRIMA DELLA PULIZIA DELL'INNER, sennò falcia via anche l'istruzione di un input
  elPerRow = document.querySelector('input').value;
  container.innerHTML= '';
  init(elPerRow);
})

function init(element){
  //elevo a potenza con math.pow
  const totalSquares = Math.pow(element, 2);
  for (let index = 0; index < totalSquares; index++) {
    //passiamo l'index per riconoscere il numero
    createSquare(totalSquares);
    
  }
}

//numerare i quadrati
function createSquare(maxSquare) {
  //creo il quadrato in questa funzione, lo valorizza e lo appende a container
  const x = document.createElement('div');
  x.className = 'square';
  //ATTENZIONE errore precedente qui:
  //rand = unico(randId);
  const rand = unico(maxSquare);
  //così come per le funzioni, possiamo anche creare delle proprietà custom! creiamone una di x con questa sintassi
  x.proprietàSalvaNumero  = rand;
  //generiamo dinamicamente anche la grandezza dei quadrati
  x.style.width = generaCalc();
  x.style.height = generaCalc();
  x.addEventListener('click', clickSqEV);
  x.addEventListener('click', clickSq);
  container.append(x);
}

//gestione click

//Parliamo un secondo di event: è un oggetto che restituisce un sacco di proprierà scaturite dall' evento stesso, ad esempio target
function clickSqEV(event) {
  console.log("EVENTO TRAMITE TARGET",event.target);
}
//FINALMENTE IL MALEDETTO THIS: this è una parola molto importante che se inserita fuori da qualsiasi contesto riporta "window" che è l'oggetto globale progenitore
console.log(this);

//utilizzandolo nell'evento precedente senza passare l'argomento event otterremmo la la stessa richiesta di event.target: "this in questo caso sono io (x) che sono stato cliccato" e quindi, mettendo THIS ALL'INTERNO DI UN ELEMENTO CHE SUBISCE UN EVENTO, MI RESTITUIRà QUELL ELEMENTO;
function clickSq() {
  console.log("EVENTO TRAMITE THIS",this);
  //richiamiamo la nostra proprietà su this e facciamo si che interagisca con il value dei div...
  this.innerHTML = this.proprietàSalvaNumero;
  //usiamo l'operatore ternario per ACCENDERE le caselle
  this.classList.add((this.proprietàSalvaNumero % 2 === 0) ? 'even' : 'odd');
  
}
//ricorda che per rendere più professionale il codice puoi inserire dei commenti alle funzioni in questo modo o...
function generaCalc() {
  return `calc(100% / ${elPerRow}`;
}
/**
 * in questo modo, dando oltre ai commenti un impostazione di visibilità della funzione ovunque essa sia(hover)
 * @param {number} min 
 * @param {number} max 
 * @returns random number
 */
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min +1))+ min;
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
