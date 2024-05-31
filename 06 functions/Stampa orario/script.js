//crea un progaramma che restituisce l'ora ogni volta che carichi la pagina

//informazioni delle variabili
const ora = document.querySelector('.ora');
const btn = document.querySelector('button');
//ASTRAIAMO
const ora2 = document.querySelector('.ora2');

//innesto subito per avere la prima iterazione a schermo
ora.innerHTML = aggiorna();

//ASTRAIAMO:in stampadata gli passo il parametro da eseguire in questo caso ora[HO L'ISTRUZIONE PRECEDENTE CHE HA QUESTO RUOLO]
//stampaData(ora);


//creo l'evento del bottone e come comportamento gli passo la funzione stampaData

//ASTRAIAMO: in stampaData scrivo il parametro in referenza al tag <H3> (const ora2) così ho il riconoscimento dell'argomento "target";
btn.addEventListener('click', function() {
  stampaData(ora2);
});

//creo la funzione aggiorna che contiene in se tutti gli elementi data e ora e restituisce una stringa formattata
function aggiorna(){

  const data = new Date();
  
  let anno = data.getFullYear();
  let mese = data.getMonth()+1;
  let giorno = data.getDate();
  let ora = data.getHours();
  let minuti = data.getMinutes();
  let secondi = data.getSeconds();
  //formattiamo la data e l'ora con sempre 2 valori

  if (mese<10) mese='0'+ mese;
  if (giorno<10) giorno='0'+ giorno;
  if (ora<10) ora='0'+ ora;
  if (minuti<10) minuti='0'+ minuti;
  if (secondi<10) secondi='0'+ secondi;

  return  `${giorno}/${mese}/${anno} <br> ${ora}:${minuti}:${secondi}`
}

//creo la funzione stampaData che conterrà la funzione del return di aggiorna da stampare direttamente all'evento del pulsante "Aggiorna"

//ASTRAIAMO:passiamogli un parametro
function stampaData(target){

  target.innerHTML = aggiorna();
}

//SCORCIATOIA: usando CTRL + D(CTRL + F per utilizzare il find) selezioni tutti i nomi(di variabile e non) ripetuti!