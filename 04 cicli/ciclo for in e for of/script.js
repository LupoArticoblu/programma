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
