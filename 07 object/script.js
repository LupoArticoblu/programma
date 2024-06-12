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
//il ciclo for OF oermette, invece di ciclare solo gli array
for (const key of array) {
  console.log(key);
}