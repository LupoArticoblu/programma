//cosa è una classe? Le classi permettono di organizzare il codice in modo più strutturato e modulare, facilitando la riusabilità e la manutenibilità del codice; In programmazione, una classe è un concetto fondamentale della programmazione orientata agli oggetti (OOP). Una classe definisce un tipo di dato complesso che combina attributi (proprietà) e comportamenti (metodi) in una singola unità. È una sorta di blueprint o modello che descrive le caratteristiche e le funzioni che gli oggetti creati da quella classe avranno


//dichiariamo una classe
//per convenzione usiamo il pascalCase che ha l'iniziale maiuscola
class Persona {
  //dichiariamo i membri della classe
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
    //proprietà nascosta
    this._age = null;
  }
  //introduco getter e setter, QUESTE funzioni vengono viste all' esterno come delle proprietà

  get age(){
    //RICORDA ci serve una proprietà nascosta per poter controllare il dato
    return this._age;
  }

  set age(newAge){
    this._age = newAge.toString();
  }

  setIndirizzo(_indirizzo){
    this.indirizzo = _indirizzo;
  }
  
  getIndirizzo(){
    return this.indirizzo;
  }

  //dichiariamo i metodi
  getFullName(){
    return `${this.name} ${this.surname}`;
  }
}

//dichiariamo una nuova Persona
const ugo = new Persona();
ugo.name = "Ugo";
ugo.surname = "Bianchi";
ugo.age = 30;
//setto un indirizzo
ugo.setIndirizzo("Via Roma");
console.log(ugo.getIndirizzo());


//dichiariamo una nuova Persona, dato il costructor con dei parametri
const luca = new Persona('Luca', 'Rossi');
//con getter e setter come proprietà possiamo indicare il valore così: nonostante sia un numero in setter diventa una stringa
luca.age = 40;
console.log(luca.age);
console.log(ugo.getFullName());
console.log(luca.getFullName()); 


//facciamo un altro esempio con le pizze

class Pizze {
  constructor(_nome, _ingredienti,){
    this.nome = _nome;
    this.ingredienti = _ingredienti;
    this._prezzo;
  }

  set prezzo(number){
    if (isNaN(number)){
      console.log('Inserisci un numero');
    }else{
      this._prezzo = number.toFixed(2);
    }
  }
  
  get prezzo(){
    return this._prezzo;
    
  }
  //usiamo un flag per sapere se la pizza è vegana
  get isVegan(){
     const noVegan =['salsiccia', 'mozzarella', 'salmone', 'ricotta', 'prosciutto'];
    let vegan = true;
    this.ingredienti.forEach(element => {
      if (noVegan.includes(element)){
        vegan = false;
      }
    }) 
    return vegan; 
  }
  //scontiamo le pizze del 10% con una funzione
  getPrezzoScontato(sconto){
    return (this._prezzo -= (this._prezzo * sconto) / 100);
  }
  get descrizione(){
    //controllo per verificare ingredienti
    if (this.ingredienti.length === 0) {
      return `${this.nome} senza ingredienti al prezzo di ${this._prezzo}€`;
    } else if (this.ingredienti.length === 1) {
      return `${this.nome} con ${this.ingredienti[0]} al prezzo di ${this._prezzo}€`;
    } else {
      //se ci sono 2 o più ingredienti verifico che vengano divisi da una virgola e da una "e" prima dell'ultimo 
      let descrizioneIngredienti = '';
      for (let i = 0; i < this.ingredienti.length; i++) {
          // Se è l'ultimo ingrediente
          if (i === this.ingredienti.length - 1) {
              descrizioneIngredienti += ` e ${this.ingredienti[i]}`;
          } else if (i === 0) {
              descrizioneIngredienti += `${this.ingredienti[i]}`;
          } else {
              descrizioneIngredienti += `, ${this.ingredienti[i]}`;
          }
      }
      return `${this.nome} con ${descrizioneIngredienti} al prezzo di ${this._prezzo}€  ${this.isVegan ? '(vegana)' : ''}`;
    }
  }
}


const pizzaMargherita = new Pizze('Margherita', ['pomodoro', 'mozzarella']);
//ATTENZIONE:Quando assegni una stringa che contiene un numero ('4'), il controllo isNaN(number) restituisce false perché '4' non è NaN (Not-a-Number). Tuttavia, quando tenta di chiamare number.toFixed(2), il codice lancia un errore perché toFixed non è un metodo definito per le stringhe.
pizzaMargherita.prezzo = 4;
console.log(pizzaMargherita);
console.log('isVegan',pizzaMargherita.isVegan);
console.log('sconto su margherita ',pizzaMargherita.getPrezzoScontato(10));
console.log('descrizione: ',pizzaMargherita.descrizione);

const pizzaMarinara = new Pizze('Marinara', ['pomodoro','capperi', 'olio']);
pizzaMarinara.prezzo = 3.5;
console.log(pizzaMarinara);
console.log('isVegan',pizzaMarinara.isVegan);
console.log('descrizione: ',pizzaMarinara.descrizione);
