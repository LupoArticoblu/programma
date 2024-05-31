//crea un progaramma che restituisce l'ora ogni volta che carichi la pagina

const ora = document.querySelector('.ora');
const btn = document.querySelector('button');

ora.innerHTML = aggiorna();


btn.addEventListener('click', function() {
  stampaData();
});


function aggiorna(){

  const data = new Date();
  
  let anno = data.getFullYear();
  let mese = data.getMonth()+1;
  let giorno = data.getDate();
  let ora = data.getHours();
  let minuti = data.getMinutes();

  return  `${giorno}/${mese}/${anno} <br> ${ora}:${minuti}`
}


function stampaData(){

  ora.innerHTML = aggiorna();
}