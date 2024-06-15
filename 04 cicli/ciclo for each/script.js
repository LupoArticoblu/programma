//il ciclo ForEach non essendo un metodo come gli altri cicli for, si usa come metodo di iterazione sugli array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//nome array.forEach(callback)
numbers.forEach((number, index, array) => {
  console.log(number, index);
})
//vengono sempre ciclati tutti e 3 gli elementi indipendentemente dal richiamarli tutti o meno

//avendo la logica di un'arrowfunction posso compattare il ciclo così
numbers.forEach(number => console.log(number));
