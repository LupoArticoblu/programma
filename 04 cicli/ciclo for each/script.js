//il ciclo ForEach non essendo un metodo come gli altri cicli for, si usa come metodo di iterazione sugli array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//nome array.forEach(callback)
numbers.forEach((number, index, array) => {
  console.log(number, index);
})
//vengono sempre ciclati tutti e 3 gli elementi indipendentemente dal richiamarli tutti o meno

//avendo la logica di un'arrowfunction posso compattare il ciclo così
numbers.forEach(number => console.log(number));

//utilizziamo il metodo map, che è come forEach ma ha un return obbligatorio, restituendo ad ogni iterazione il frutto di una determinata logica

const potenze = numbers.map(number =>{ 
  return number * number;
});
console.log(potenze);
//salvando il tutto in un nuovo array: potenze

//di un array di oggetti voglio salvare solo un valore, per questo posso usare il metodo map
const studenti = [
  {
      nome: "Luca",
      cognome: "Rossi",
      età: 17,
      corsoDiStudi: "Informatica"
  },
  {
      nome: "Maria",
      cognome: "Bianchi",
      età: 20,
      corsoDiStudi: "Matematica"
  },
  {
      nome: "Giovanni",
      cognome: "Verdi",
      età: 17,
      corsoDiStudi: "Fisica"
  },
  {
      nome: "Elena",
      cognome: "Neri",
      età: 19,
      corsoDiStudi: "Chimica"
  }
];

const etaStudenti = studenti.map(studente => studente.età);
console.log(etaStudenti);

//filter funziona come map per filtrare i valori in base a una condizione

//voglio solo numeri pari dell'array numbers
const pari = numbers.filter(number => {
  //nel return si mette SOLO la condizione vera per effettuare il push in pari
  return number % 2 === 0
});
console.log(pari);
//a differenza di map, filter restituisce sempre l'elemento

//voglio che mi ritornino solo i nomi degli studenti maggiorenni
const studentiMaggiorenni = studenti.filter(studente => studente.età >= 18);
console.log(studentiMaggiorenni);

const nomiCognomi = studentiMaggiorenni.map(studente => {
  return studente.nome + ' ' +studente.cognome
});
console.log(nomiCognomi);

//array di oggetti con 10 automobili: marca, modello e alimentazione(benzina, diesel, gpl, elettrica)

const automobili = [
  {
    marca: "Audi",
    modello: "Q7",
    alimentazione: "diesel"
  },
  {
    marca: "BMW",
    modello: "X5",
    alimentazione: "diesel"
  },
  {
    marca: "Fiat",
    modello: "Panda",
    alimentazione: "benzina"
  },
  {
    marca: "Ford",
    modello: "Mustang",
    alimentazione: "diesel"
  },
  {
    marca: "Mercedes",
    modello: "C63",
    alimentazione: "elettrica"
  },
  {
    marca: "Nissan",
    modello: "GTR",
    alimentazione: "gpl"
  },
  {
    marca: "Renault",
    modello: "Megane",  
    alimentazione: "diesel"
  },
  {
    marca: "Volkswagen",
    modello: "Golf",
    alimentazione: "benzina"
  },
  {
    marca: "Toyota",
    modello: "Yaris",
    alimentazione: "diesel"
  },  
  {
    marca: "Volkswagen",
    modello: "Passat",
    alimentazione: "diesel"
  }
];  
//dividere in 3 array: auto a benzina, auto diesel, altre auto
const autoBenzina = automobili.filter(auto => auto.alimentazione === 'benzina');

const autoDiesel = automobili.filter(auto => auto.alimentazione === 'diesel');

const altreAuto = automobili.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel');

//stampo separatamente i 3 array
console.log(autoBenzina);
console.log(autoDiesel);
console.log(altreAuto);




//creare un array di stringhe con nomi e 'case' diversi
const nomiCaotici = [
  'luca',
  'maria',
  'GIOVANNI',
  'FaUSto' 
];
console.log(nomiCaotici);
//dal primo creiamo un nuovo array formattato con tutte le prime lettere maiuscole
const nomiFormattati = nomiCaotici.map(nome => {
  return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
});
console.log(nomiFormattati);