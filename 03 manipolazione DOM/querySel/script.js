//query Selector sono selettori avanzati che prendono solo il primo elemento con una determinata classe:

console.log(document.querySelector('.red').innerHTML);
//può prendere qualsiasi selettore avanzato e annidato come fosse in css:
console.log(document.querySelector('#red').innerHTML);

//un elemento può essere salvato in una variabile 
const lorem1 = document.querySelector('#lorem');

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


