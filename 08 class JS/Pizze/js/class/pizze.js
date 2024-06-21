//per convenzione le aree di lavoro si dividono in fogli di calcolo e classi
//sempre per convenzione nome classe e nome file.js coincidono
class Pizze {
  constructor(_nome, _ingredienti,){
    this.nome = _nome;
    this.ingredienti = _ingredienti;
    this._prezzo;
    this.immagine;
  }

  
  set prezzo(number){
    if (isNaN(number)){
      console.log('Inserisci un numero');
    }else{
      this._prezzo = number.toFixed(2);
    }
  }
  
  get prezzo(){
    return this._prezzo;
    
  }
  //usiamo un flag per sapere se la pizza è vegana
  get isVegan(){
     const noVegan =['salsiccia', 'mozzarella', 'salmone', 'ricotta', 'prosciutto'];
    let vegan = true;
    this.ingredienti.forEach(element => {
      if (noVegan.includes(element)){
        vegan = false;
      }
    }) 
    return vegan; 
  }
  //scontiamo le pizze del 10% con una funzione
  getPrezzoScontato(sconto){
    return (this._prezzo -= (this._prezzo * sconto) / 100);
  }
  get descrizione(){
    //controllo per verificare ingredienti
    if (this.ingredienti.length === 0) {
      return `${this.immagine ? `<img src="${this.immagine}">` : 'immagine non trovata'}:
      ${this.nome} senza ingredienti al prezzo di ${this._prezzo}€`;
    } else if (this.ingredienti.length === 1) {
      return `${this.immagine ? `<img src="${this.immagine}">` : 'immagine non trovata'}:
      ${this.nome} con ${this.ingredienti[0]} al prezzo di ${this._prezzo}€`;
    } else {
      //se ci sono 2 o più ingredienti verifico che vengano divisi da una virgola e da una "e" prima dell'ultimo 
      let descrizioneIngredienti = '';
      for (let i = 0; i < this.ingredienti.length; i++) {
          // Se è l'ultimo ingrediente
          if (i === this.ingredienti.length - 1) {
              descrizioneIngredienti += ` e ${this.ingredienti[i]}`;
          } else if (i === 0) {
              descrizioneIngredienti += `${this.ingredienti[i]}`;
          } else {
              descrizioneIngredienti += `, ${this.ingredienti[i]}`;
          }
      }
      return `${this.immagine ? `<img src="${this.immagine}">` : 'immagine non trovata'}:
      ${this.nome} con ${descrizioneIngredienti} al prezzo di ${this._prezzo}€  ${this.isVegan ? '(vegana)' : ''}`;
    }
  }
}