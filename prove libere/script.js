console.log('ciao');

const counter = document.querySelector('h3');
let num = 0;
let limit =10;


const lol = setInterval(function(){
  ++num;
if (num === limit) {
  clearInterval(lol);
  }
  //per far funzionare il contatore bisogna inserire innerhtml all'interno della function
  counter.innerHTML = num;
},1000)







