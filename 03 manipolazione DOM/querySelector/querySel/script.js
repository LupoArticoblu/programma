//query Selector sono selettori avanzati che prendono solo il primo elemento con una determinata classe:

console.log(document.querySelector('.red').innerHTML);
//può prendere qualsiasi selettore avanzato e annidato come fosse in css:
console.log(document.querySelector('#red').innerHTML);

//un elemento può essere salvato in una variabile 
const lorem1 = document.querySelector('#lorem');
const lorem2 = document.querySelector('#lorem2');

//la proprietà classList restituisce l'elenco delle classi di un determinato elemento 
console.log(lorem1.classList);

//usando classList posso aggiungere altre classi in modo dinamico
lorem1.classList.add('upper');

//la nuova classe inserita sarà ora visualizzabile sull elemento
console.log(lorem1.classList);

//posso anche sottrarre una classe in modo dinamico
lorem1.classList.remove('yellow');
console.log(lorem1.classList);

//posso anche resettare tutte le classi utilizzando una stringa vuota
//lorem1.classList = " ";

//la proprietà className mi restituisce una stringa contenente i nomi delle classi
console.log(lorem1.className); 

//PS. posso aggiungere dinamicamente una classe leggendola come stringa con l'ausilio del className
lorem1.className += ' yellow';

//anche se aggiunta come stringa, la classe resterà invariata e funzionale
console.log(lorem1);

//e anche in questo caso posso sottrarre la classe sostituendola con una stringa vuota
lorem1.className = lorem1.className.replace(' yellow','');
console.log(lorem1);

//posso utilizzare una classe CSS con display none per far scomparire qualcosa dal flusso del documento
const myContainer = document.querySelector('.myContainer');
myContainer.classList.add('hide');
console.log(myContainer);

//aggiungere tramite l'elemento style varie proprietà CSS come il backgroundColor
lorem1.style.backgroundColor = 'yellow';

//con la proprietà cssText posso scrivere più proprietà come fossero una stringa, e scrivo i valori come in css
lorem2.style.cssText = 'background-color: red; font-size: 0.6rem; border: dotted; padding: 5px';
console.log(lorem2);

//per aggiungere qualcosa, come un testo, all'interno del tag"<p>" che si trova nel nostro container:
const container2 = document.querySelector('.container2 p');

//ATTENZIONE solo il primo figlio con tag p sarà preso in considerazione
container2.innerHTML += " --- altro testo con innerHTML"

//il metodo più usato è append() che inserisce il testo appena prima della chiusura del tag
container2.append(' ---- altro testo con append()')

//il metodo prepend() invece, ti consente di inserire testo subito dopo l'apertura del tag
container2.prepend('-- testo inserito col metodo prepend(). ');


//il metodo addEventListener() permette a JS di compiere una determinata azione come reazione a qualcos'altro, l'elmento infatti "resta in ascolto" e attende una determinata azione
let btn1 = document.querySelector('.container3 button');
console.log(btn1);

//creo una variabile per effettuare un toggle sul bottone
let daCliccare = true;


//fra apici vi inserisco gli eventiche sono vari: "click","dblclick","drag","drop" ecc.... ed inserirgli una funzione anonima come secondo parametro
btn1.addEventListener('click', function() {
  if (btn1) {
    btn1.innerHTML = "mi hai clickato!"
  }
});

//vediamo come funziona la logica toggle per rendere cangiante un elemento
let btn3 = document.querySelector('.container5 button');

/*btn3.addEventListener('click', function() {
  la variabile daCliccare viene esaminata da un if, se questa è true il nostro bottone mostrerà qualcosa e la renderà false, ricliccando mostrerà altro e la renderà di nuovo true creando un ciclo
  if (daCliccare) {
    btn3.innerHTML = "mi hai clickato!"
    daCliccare = false;
  } else {
    btn3.innerHTML = "Cliccami!"
    daCliccare = true;
  } 
})*/

//un evento scatenante può avere effetti su altri elementi e sul flusso del documento
let btn2 = document.querySelector('.container4 button');
btn2.addEventListener('click', function() {
  //per evitare che il terzo bottone torni al primo caso di toggle faccio un controllo sullo stato di 2 variabili, una mi controlla se btn2 è stato cliccato e nel caso diventa true per non tornare ad uno stato precedente è l'altra è il comportamento che deve avere il bottone per rendere cangiante il btn3
  if(!btn2Cliccato) {
    statoBtn2 = !statoBtn2;
    btn2Cliccato = true;
  }
  if (btn2) {
    btn2.classList.add('rotating-button');
    btn2.classList.toggle('rotate');
    btn1.classList.add('hide');
    btn2.innerHTML = "😈"
    btn3.innerHTML = "😨"
    console.log(btn2);
  }});
  
//il comportamento di un bottone può cambiare ancora innestando nel proprio EventListener il comportamento di un altro

//creiamo una variabile che identifichi lo stato del secondo bottone e inseriamo il suo comportamento nell  Event listener del secondo bottone
let statoBtn2 = false;
//e una variabile da inserire nell evento btn3 per renderlo toggle
let statoBtn3 = true;
//diamo un nuovo evento al terzo bottone ma solo se...
btn3.addEventListener('click', function() {
  console.log(btn3);
  if (statoBtn2) {
    if (btn3.innerHTML = "😨" && statoBtn3) {  
      btn3.innerHTML = "😭"
      statoBtn3 = false;
    }else{
      btn3.innerHTML = "😨"
      statoBtn3 = true;
    }
  } else{
    if (daCliccare) {
      btn3.innerHTML = "mi hai clickato!"
      daCliccare = false;
    } else {
      btn3.innerHTML = "Cliccami!"
      daCliccare = true;
    } 
  }
})

//flag per tener traccia del comportamento del secondo bottone (quando true non può più tornare indietro)
let btn2Cliccato = false;




//creiamo un bottone che apre un prompt e chiede all' utente prima il nome poi il genere e stampare il nome con colori dipendenti al sesso scelto
const btn4 = document.querySelector('.container6 button');

//la funzione pùo essere richiamata per nome e senza parentesi... 
btn4.addEventListener('click', question);

//...dichiarandola ovunque nel codice
function question() {
  console.log(btn4);
  const nome = prompt('come ti chiami?');
  let genere = prompt('sei maschio o femmina?');
  const output = document.getElementById('output');
  output.innerHTML = nome;

  //rendiamo il genere sempre riconoscibile in stringa dal programma nonostante lettere maiuscole tramitr il metodo toLowerCase()
  genere = genere.toLocaleLowerCase();
  if (genere == "maschio") {
    //in questo caso classList non va bene perchè memorizza la classe e non sostituisce il colore
    //output.classList.add('blue');
    output.className = 'blue';
  } else if (genere == "femmina"){
    //output.classList.add('red');
    output.className = 'red';
  }else{
    //output.classList.add('yellow');
    output.className = 'yellow';
  }
}

