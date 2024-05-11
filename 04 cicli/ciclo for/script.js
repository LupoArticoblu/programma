//un operatore di incremento aggiunge "ciclicamente" ad un elemento o numero un valore "+1": Si scrive usando ++

let x= 1;
let y= 3;
//prima la legge e poi la incrementa...
console.log(x++);
//...o prima la incrementa e poi la legge
console.log(++x);
//stessa cosa vale per il decremento
console.log(--y);

//CICLO FOR ripete una determinata azione tutte le volte che occorre
//nel parametro dichiariamo una variabile let(convenzione "i = 0")
//questo ciclo mi conterà fino a 100... il ciclo ha un punto d'inizio ed uno d'arrivo e gira finchè la condizione finale non si verifica
for (let i = 0; i < 100; i++) {
  console.log(i);
}
console.log('----');
//la variabile in parametro ha uno scope sspecifico in quel ciclo quindi posso utilizzare altre "i = 0" in altri cicli for
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//ATTENZIONE si usa sempre let e mai var perchè quest'ultima diventa una variabile globale

//posso anche incrementare in modo diverso usando "i += numero"
for (let i = 0; i < 30; i += 5) {
  console.log(i);
}

//posso decrementare partendo da un numero x (da 20 a 1)
for (let i = 10; i > 0; i--) {
  console.log(i);
}
//ATTENZIONE decrementare prima di leggere la variabile in questo caso, porterà ad un ciclo infinito che farà crashare il programma


//-----------STAMPO PARI O STAMPO DISPARI (fino a 30)--------
console.log('--STAMPO PA I O STAMPO DISPARI--');
for (let index = 0; index < 30 ; index++) {
  //ATTENZIONE quando è vero che non c'è resto il ciclo dovrà leggermelo come false
  if (!(index % 2)) {
    console.log(index,"è pari");
  } else {
    console.log(index,"è dispari");
  }
}

//----------DECREMENTO DA 0 A -10----------
console.log('-----DECREMENTO DA 0 A -10------');
for (let index = 0; index >= (-10); index--) {
  console.log(index);
  
}
//ATTENZIONE un operatore di incremento (i++) in questo caso porterà ad un ciclo infinito che farà crashare il programma: usare i--


//---------RICERCA NUMERO---------------

const numPag = 123;
const libro = 200;


for (let index = 0; index <= libro; index++) {
  if (index < numPag) {
    console.log(index + ' avanti');
  }else if(index > numPag){
    console.log(index + ' indietro');
  }else{
    apriLibro();
  }
  
}

function apriLibro() {
  console.log('apri il libro qui');
}



//stampiamo in pagina
const ul = document.querySelector('.ricerca');


for (let index = 0; index <= libro; index++){
  if (index < numPag) {
    //CREO L'ELEMENTO E LO AGGIUNGO IN PAGINA IN FORMATO HTML
    const li = `<li class="box">${index} Avanti</li>`;
    ul.innerHTML += li;  
  } else if(index > numPag){
    const li = `<li class="box">${index} Indietro</li>`;
    ul.innerHTML += li;
  }else{
    const li = `<li class="box">${index} APRI QUI!</li>`;
    ul.innerHTML += li;  
  }
}

//POSSO USARE createElement() per creare un elemento nell'html senza scriverlo per esteso come in precedenza
const list2 = document.querySelector('.list2');

for (let index = 0; index <= libro; index++){
  if (index < numPag) {
    //CREO L'ELEMENTO E LO AGGIUNGO IN PAGINA IN FORMATO HTML
    const li = document.createElement('li'); 
    //gli do un valore
    li.innerHTML = "elemento creato in Js " + (index);
    //lo aggiungo
    list2.append(li);
    //posso anche innestare del css
    if (!(index % 2)) {
     li.style.cssText = 'color: red';
    }else{
      li.style.cssText = 'color: blue';
    }
  } else if(index > numPag){
    const li = document.createElement('li'); 
    li.innerHTML =  (index) +" elemento creato in Js";
    list2.append(li); 
    if (!(index % 2)) {
     li.style.cssText = 'color: red';
    }else{
      li.style.cssText = 'color: blue';
    }
  }else{
    const li = document.createElement('li'); 
    li.innerHTML =  "APRI QUI " + (index);
    list2.append(li);  
  }



}


