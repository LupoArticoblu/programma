//fa tirare i dadi sia alla macchina che all'utente, vince chi fa il punteggio più alto



const out = document.querySelector('.output');
const btn = document.querySelector('button');

//al click del bottone
btn.addEventListener('click', function(){
  //estrarre 2 numeri random
  const numA = Math.ceil(Math.random() * 6);
  const numB = Math.ceil(Math.random() * 6);
  //leggere la condizione
  if (numA < numB) {
    out.innerHTML = `Giocatore1: ${numA}<BR>
    CPU: ${numB}<BR>
    HAI PERSO!`
  } else if(numA > numB){
    out.innerHTML = `Giocatore1: ${numA}<BR>
    CPU: ${numB}<BR>
    HAI VINTO!`
    
  } else {
    out.innerHTML = `Giocatore1: ${numA}<BR>
    CPU: ${numB}<BR>
    PAREGGIO!`

  }

})
