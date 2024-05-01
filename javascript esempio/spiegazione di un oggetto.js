
 //esempio di proprietà variabili e non su di un Martello
//un "oggetto" ha le sue proprieta e le due funzioni

//per scoprire determinate proprietà utilizziamo la dot notation
pesoMartello = martello.peso

//per comprendere se una propietà è di sola lettura oppure no, devo vedermi la documentazione dell' oggetto !esempio se provassi a cambiare il peso del martello mi genererebbe un errore

coloreMartello = martello.colore

//la proprietà "colore" è sia di lettura che di scrittura infatti possiamo sovrascriverla senza modificare l'oggetto

nuovoColore = "rosso"

//e assegnarlo. sostituendo così la proprietà con un nuovo valore salvato in una variabile

martello.colore = nuovoColore

//un esempio di funzione o metodo del martello, la sintassi vuole che venga sempre riportata con delle parentesi vuote

martello.fissaChiodi()

//inserire all'interno delle parentesi qualcosa creerà dei parametri: se inserisco un numero tra le parentesi potrei star indicando quanti chiodi ho fissato

martello.fissaChiodi(5)

//anche qui, per sapere se posso e quanti parametri inserire vedrò la documentazione dell'oggetto riguardante le funzioni

//alcuni metodi restituiscono un feedback dopo aver compiuto l'azione e questo può essere salvato in variabili

chiodiPiantati = martello.fissaChiodi()

//in JS si usa un metodo di scrittura chiamato camelCase: mentre per l'identificazione delle classi(quello che si fà in Java) si usa il PascalCase 