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

//posso creare anche un array di oggetti che ha altri oggetti al suo interno

const paesi =[
  {
    paese: 'Spagna',
    lingua: 'spagnolo',
    capoluoghi:{
      1:'Madrid',
      2:'Siviglia',
      3:'Saragozza',
      4:'Oviedo',
      5:'Palma de Mallorca'
    }
  },
  {
    paese: 'Italia',
    lingua: 'italiano',
    capoluoghi:{
      1:'Aosta',
      2:'Torino',
      3:'Genova',
      4:'Milano',
      5:'Trento',
      6:'Venezia',
      7:'Trieste',
      8:'Bologna',
      9:'Firenze',
      10:'Perugia',
      11:'Ancona',
      12:'Roma',
      13:'l\'Aquila',
      14:'Campobasso',
      15:'Napoli',
      16:'Bari',
      17:'Potenza',
      18:'Catanzaro',
      19:'Palermo',
      20:'Cagliari',
    }
  },
  {
    paese: 'Portogallo',
    lingua: 'portoghese',
    capoluoghi:{
      1:'Porto',
      2:'Lisbona',
      3:'Faro',
      4:'Funchal'
    }
  }
]

//cicliamo
for (let i in paesi) {
  const city =paesi[i];
  console.log(`Paese: ${city.paese}`);
  console.log(`Lingua: ${city.lingua}`);
//facciamo aggiungere una proprietà custom all'utente ed inseriamola nell'oggetto
/*
  city.densità = parseInt(prompt('aggiungi la popolazione in numeri'));
  console.log('Densità: ' + city.densità);
*/
  console.log('Capoluoghi:');
  //controlliamo i capoluoghi
  for (let j = 1; j <= 20; j++) {
    //usiamo l'operatore ternario
    const luoghi = (city.capoluoghi[j]) ? city.capoluoghi[j] : 'non ci sono altri capoluoghi';
     console.log(j,luoghi);
  }
}

//creiamo un array di ricette

const ricette = [
  {
    img: `https://www.giallozafferano.it/images/179-17902/Spaghetti-alla-Norma_650x433_wm.jpg`,
    nome: 'Pasta alla norma',
    ingredienti: ['Pasta', 'Mozzarella', 'Basilico', 'Melanzane'],
    tempo: 30,
    livello: 2
  },
  {
    img: `https://www.moltofood.it/wp-content/uploads/2023/08/spaghetti_assassina_copertina.jpg`,
    nome: 'Spaghetti all\'assassina',
    ingredienti: ['Spaghetti', 'Salsa pomodoro', 'Peperoncino'],
    tempo: 15,
    livello: 3
  },
  {
    img: `https://cdn.agrodolce.it/aVbMULPTq6xba3q2sQtCrnZwQfM=/1150x647/smart/https://www.agrodolce.it/app/uploads/2013/11/ltort1.jpg`,
    nome: 'Tortellini alla romana',
    ingredienti: ['Tortellini', 'Sugo', 'Pecorino'],
    tempo: 20,
    livello: 1
  }
];

//creiamo dinamicamente un elemento div per ogni ricetta
const div = document.createElement('div');
const row = document.querySelector('.row');
row.append(div);
for (const ricetta of ricette) {
  console.log(ricetta);
  let lista = '';
  for (const ingrediente of ricetta.ingredienti) {
    lista += `<li>${ingrediente}</li>`;
  }
  let card = 
  `<div class="col-4">
  <div class="card" style="width: 18rem;">
    <img src="${ricetta.img}" class="card-img-top" alt="${ricetta.nome}">
    <div class="card-body">
      <p class="card-name">NOME - ${ricetta.nome}</p>
      <p class="card-time">TEMPO - ${ricetta.tempo} minuti</p>
      <p class="card-difficulty">DIFFICOLTà - ${ricetta.livello} &#9733;</p>
      <ul class="ingred">
        ${lista}
      </ul>
    </div>
  </div>

</div>`
  //stampiamolo
  row.innerHTML += card;
};

//una possibilità introdotta in ES6 è quella di usare, in un oggetto solo la chiave se chiave e valore corrispondono sempre

let name = 'beppe';
let lastName = 'tomi';
let age = 21;

const user = {
  name, //<- name: name
  lastName, //<- lastName: lastName
  age, //<- age: age
  [keyd]: 'via sanchez II'
};

console.log(user);

//possiamo anche creare delle chiavi dinamiche

let keyd = 'adress';

//Destrutturare, prendere dei valori da un array e salvarli, come sempre in una costante

const {paese, lingua} = paesi;
console.log(paese, lingua); 

//ATTENZIONE: non è possibile farlo con l'oggetto user(in questo caso) perche non possiamo riassegnare la variabile gia esistente
/*
let {name, lastName, age} = user; <= let name, lastName, age
console.log(name, lastName, age);    già esistono
*/