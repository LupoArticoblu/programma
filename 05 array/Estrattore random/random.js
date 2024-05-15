//creiamo un array di nomi, cicliamoli ed estraiamo di volta in volta un nome diverso, se tutti i nomi son stati estratti termina il ciclo e ricomincia

const nomi =['Alberto','Brigida','Carlo','Domizia','Elio','Federica'];

//iniziamo con l'estrazione semplice

const button = document.querySelector('.btn');
const output = document.querySelector('.output');

button.addEventListener('click', estrai);


function estrai() {
  
  let momo = Math.floor(Math.random() * nomi.length);  
  console.log(nomi[momo]);
  output.innerHTML = nomi[momo];
}