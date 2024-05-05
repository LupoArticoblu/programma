
//l' oggetto Math racchiude una serie di proprietà di operazione tra cui "random()", un metodo che serve ad estrarre in modo casuale un qualsiasi elemento da una lista 


//Math.random() mi restituisce in console un numero qualsiasi decimale tra 0 e 1

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//anche questa funzione ha indice 0, e viene usato spesso nei parametri di altre funzioni di Math come "floor()" che fa un arrotondamento per difetto al numero intero(es: 9.19 = 9) e "ceil()" che lo fa per eccesso ad un numero intero(es: 9.19 = 10)


//facciamoci restituire un numero tra 0 e 9

console.log(Math.floor(Math.random() * 10));

//per restituire un numero partendo da indice 1 invece bisogna usare "+1" dopo le parentesi tonde

console.log('--------',Math.floor(Math.random() * 10) +1);

//oppure usiamo math.ceil()

console.log('--------',Math.ceil(Math.random() * 10));