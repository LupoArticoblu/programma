const elencoPizza = [
  {
    nome: 'Margherita',
    ingredienti: ['mozzarella', 'pomodoro', 'basilico'],
    prezzo: 8
  },
  {
    nome: 'Diavola',
    ingredienti: ['mozzarella', 'pomodoro', 'prosciutto', 'peperoni'],
    prezzo: 10
  },
  {
    nome: 'Hawaiana',
    ingredienti: ['mozzarella', 'pomodoro', 'peperoni', 'olive', 'basilico', 'ananas'],
    prezzo: 12
  },
  {
    nome: 'Marinara',
    ingredienti: ['capperi', 'pomodoro', 'olio'],
    prezzo: 6
  }
];  

const pizzeClass = elencoPizza.map(pizzaObj => {
  const new_pizza = new Pizze(pizzaObj.nome, pizzaObj.ingredienti);
  new_pizza.prezzo = pizzaObj.prezzo;
  return new_pizza;
});


const pizzeList = document.getElementById('pizzeList');
pizzeClass.forEach(pizza => {
  pizzeList.innerHTML += `<li>${pizza.descrizione}</li><br>`
})

console.log(pizzeClass);