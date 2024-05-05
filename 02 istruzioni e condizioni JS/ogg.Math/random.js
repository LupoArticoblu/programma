
//l' oggetto Math racchiude una serie di proprietà di operazione tra cui "random()", un metodo che serve ad estrarre in modo casuale un qualsiasi elemento da una lista 


//Math.random() mi restituisce in console un numero qualsiasi decimale tra 0 e 1

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//anche questa funzione ha indice 0, e viene usato spesso nei parametri di altre funzioni di Math come "floor()" che fa un arrotondamento per difetto al numero intero(es: 9.59 = 9), "ceil()" che lo fa per eccesso ad un numero intero(es: 9.19 = 10) e "round()" che arrotonda(es: 9.19 = 9 || 9.59 = 10)


//facciamoci restituire un numero tra 0 e 9

console.log(Math.floor(Math.random() * 10));

//per restituire un numero partendo da indice 1 invece bisogna usare "+1" dopo le parentesi tonde

console.log('--------',Math.floor(Math.random() * 10) +1);

//oppure usiamo math.ceil()

console.log('--------',Math.ceil(Math.random() * 10));

//restituiamo un numero tra 0 e 10 con "round()"
console.log('round', Math.round(Math.random() * 10));


//------------ Random range ------------

console.log('round range', Math.round(Math.random() * (10 - 5) + 5));
//la posizione del numero "+5" in questo caso, non è rilevante se fuori o dentro alle parentesi di math.round()
console.log('round range', Math.round(Math.random() * (10 - 5) )+ 5);
console.log('round range', Math.round(Math.random() * (10 - 5) + 5));
console.log('round range', Math.round(Math.random() * (10 - 5) )+ 5);
console.log('round range', Math.round(Math.random() * (10 - 5) + 5));
console.log('round range', Math.round(Math.random() * (10 - 5) )+ 5);

// Quindi per estrarre un numero casuale tra 2 fattori bisogna moltiplicare il risultato tra il fattore maggiore ed il fattore minore e sommarlo al fattore minore


const fattore_1 = 1;
const fattore_2 = 90;

let numFortunato;

numFortunato = Math.round(Math.random() * (fattore_2 - fattore_1) + fattore_1);

document.getElementById('random').innerHTML += ` <strong>${numFortunato}</strong>`;

