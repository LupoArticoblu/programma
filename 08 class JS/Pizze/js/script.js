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
    prezzo: 6,
    immagine: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbytp6iFFiUX-EbyBzP9KstLseAnZDrZfOcg&s'
  }
];  

const pizzeClass = elencoPizza.map(pizzaObj => {
  const new_pizza = new Pizze(pizzaObj.nome, pizzaObj.ingredienti);
  new_pizza.prezzo = pizzaObj.prezzo;
  if (pizzaObj.immagine) {
    new_pizza.immagine = pizzaObj.immagine;
  }
  return new_pizza;
});

const pizzeList = document.getElementById('pizzeList');

pizzeClass.forEach(pizza => {
  pizzeList.innerHTML += `<li>${pizza.descrizione}</li><br>`
})

console.log(pizzeClass);