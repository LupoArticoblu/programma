//gli oggetti si distinguono dagli array perchè sono contenitori di proprietà e non di sole stringhe o numeri

//array
const array = ['beppe','tomi','via sanchez II', 21];

//object
const oggetto ={
  //chiave:valore(qualsiasi tipo di dato)
  nome:'beppe', //<- virgola tra una proprietà e l'altra
  'cognome':'tomi', // <- chiave con apici
  via: 'via sanchez II', // <- chiave senza apici
  anni: 21,
  hobbies: ['pattinaggio','alpinismo','leggere']
};

//da leggere con la dotNotation perchè sono proprietà...
console.log(oggetto.nome);

//...o con le parentesi quadre come fossero figli di un array
console.log(oggetto['cognome']);

//posso anche usare una variabile come chiave attribuendole il valore della chiave stessa usata nell'oggetto
let key = 'via';
//la vera utilità della square braket notation per gli oggetti
console.log(oggetto[key]);
console.log(oggetto.key);//<- la dotNotation qui restituisce undefined

console.log("prima della riassegnazione",oggetto.anni);
//le proprietà possono essere riassegnate(lettura/scrittura)
oggetto.anni = 31;

console.log("dopo la riassegnazione",oggetto.anni);

//aggiungo una proprietà
oggetto.telefono = 3270000001;

console.log(oggetto);
console.log('-----------');

//ciclo for in, un ciclo che ti permette di leggere tutte le chiavi di un oggetto
for (const key in oggetto) {
  console.log(key);  
}
  
console.log('-----------');
//posso usarlo anche per ciclare gli array valorizzando ad ogni ciclo l'indice
for (const key in array) {
  console.log(array[key]);
}
console.log('-----------');
//il ciclo for OF permette, invece di ciclare solo gli array
for (const index of array) {
  console.log(index);
}

for (const key in oggetto) {
  //leggo le key in oggetto e con oggetto[key] ne leggo il valore
  console.log(`${key}: ${oggetto[key]}`);
}


//array di oggetti: mettiamo caso di avere una classe di studenti

const classe =[
  {
    nome: 'Tancredi',
    cognome: 'Adalli',
    anni: 13
  },
  {
    nome: 'Evaristo',
    cognome: 'Gallilei',
    anni: 14
  },
  {
    nome: 'Manfredi',
    cognome: 'Petersoli',
    anni: 13
  },
  {
    nome: 'Gerardo',
    cognome:'Colò',
    anni: 17
  }
]
//posso usare tutte le funzionalità di un array, come il push il pop ecc..

const nuovoStudente = {
  nome:'Ippolito',
  cognome: 'Khan',
  anni: 15
}

classe.push(nuovoStudente);
//posso anche passare direttamente l'oggetto senza salvarlo in variabile
classe.push({nome:'Deianira', cognome:'Sabaudi', anni: 13})

//tutti i modi per ciclare questo array
for (let index = 0; index < classe.length; index++) {
  console.log(classe[index]);  
}

console.log('--- ciclo for ^ ---');

for (let chiave in classe) {
  const studente = classe[chiave];
  console.log(`${studente.nome} ${studente.cognome} - ${studente.anni}`);
}

console.log('--- ciclo for in ^ ---');

for (const iterator of classe) {
  console.log(iterator);
}

console.log('--- ciclo for of ^ ---');

for (const iterator of classe) {
  let output =``;
  
  for (const key in iterator) {
    output += iterator[key] + ' ';
  }
  
  console.log(output);
}

console.log('--- ciclo for in innestato a for of ^ ---');