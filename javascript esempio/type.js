//utilizziamo il dom per riconoscere l'oggetto genitore e lo utilizziamo: DOCUMENT è IL GENITORE DI TUTTO IL DOM

document.writeln("HELLO JAVASCRIPT by document");

//utilizziamo un metodo che ha come genitore JS stesso infatti non ha oggetto da dichiarare: alert che viene usato tipicamente come messaggio d'errore ed è BLOCCANTE

alert("hello js by alert");

//anche la console/terminale è un oggetto che ha come metodo: LOG()

console.log("hello js by console")

//un altro modo è innestrare in un elemento dell'html i valori che vogliamo vengano letti 

document.getElementById('saluto').innerHTML= 'hello JS in getElement';