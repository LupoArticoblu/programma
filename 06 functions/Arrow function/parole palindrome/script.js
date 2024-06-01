//chiedere all'utente una parola e creare una funzione che indichi se la parola è palindroma o meno

//Soluzione di stefano: leggere la parola inserita, creare una funzione che giri la parola verifichi l'uguaglianza delle 2 parole e riporti il valore "true" se palindromo e "false" in caso non lo sia

const parolaInserita = ""//prompt('Verifica se la parola è palindroma');
const parolaGirata = giraParola(parolaInserita);



if (parolaInserita === parolaGirata) {
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}


function giraParola(primaParola) {
  //mettiamo una stringa vuota perchè sennò non sa cosa sta concatenando e mi risulterà undefined al primo ciclo
  let parolaGirata = '';
  //metodo con ciclo for
  for (let index = primaParola.length -1; index >= 0; index--) {
    parolaGirata += primaParola[index];
    
  }

  return parolaGirata
}

//Soluzione più pratica: usiamo il metodo split() che divide una stringa creando un array es:
const ciao = 'ciao come stai ?';
//come argomento possiamo passargli un parametro vuoto per destrutturare l'intera frase ed ottenere un array di lettere o, come in questo caso passiamo uno spazio per segnare un divisore ed ottenere le parole intere che formano la frase
console.log(ciao.split(' '));
//e reverse() che mi legge l'array al contrario
console.log(ciao.split(' ').reverse());


//informazioni

const parola = document.querySelector('input');
const btn = document.querySelector('button');
const output = document.querySelector('h3');
let isTrue = false;

btn.addEventListener('click', function(){
  isPalindromo();
  parola.value ="";
})


//questa funzione deve prendere la parola scomporla in lettere e sapendo la posizione delle lettere riconoscere se palindromo o meno
function isPalindromo(){
  
  if (parola.value.split('') === parola.value.split('').reverse()) {
    isTrue = true
    output.innerHTML = `La parola ${parola.value} è palindroma`
    return
  }
  isTrue = false
  output.innerHTML = `La parola ${parola.value} non è palindroma`
  return

}

console.log(parola.value.split(''));
console.log(parola.value.split('').reverse());