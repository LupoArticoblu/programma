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
}

const pizzaMargherita = new Pizze('Margherita', ['pomodoro', 'mozzarella']);
//ATTENZIONE:Quando assegni una stringa che contiene un numero ('4'), il controllo isNaN(number) restituisce false perché '4' non è NaN (Not-a-Number). Tuttavia, quando tenta di chiamare number.toFixed(2), il codice lancia un errore perché toFixed non è un metodo definito per le stringhe.
pizzaMargherita.prezzo = 4;
console.log(pizzaMargherita);
