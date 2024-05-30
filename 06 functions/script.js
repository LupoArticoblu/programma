//le funzioni sono blocchi di codice riutilizzabili tutte le volte che vengono invocate e possono svolgere una funzione specifica ma con tante possibilità diverse, oltre ad avere funzioni standard in JS (es. Math.random(), add(), push(), length) possiamo creare le nostre funzioni personalizzate che inseriremo alla fine del codice per rendere ordinata la lettura

//sintassi:ATTENZIONE i parametri qui non servono per delle condizioni ma per passare informazioni...
function name(params) {
  
}
//come scritto in precedenza le funzioni vengono invocate, finchè ciò non succede sono latenti all'interno del codice e non vengono viste dal DOM

saluto();


function saluto() {
  console.log('ciao');
}

//le informazioni come appena visto non sono obbligatorie ma vediamo quale ruolo hanno

salutoPersonale('buongiorno');
salutoPersonale('buonasera');
//chiamo la stessa funzione, ma ta le parentesi uso informazioni diverse ed ottengo risultati diversi
function salutoPersonale(mioSaluto){
  console.log(mioSaluto);
}
