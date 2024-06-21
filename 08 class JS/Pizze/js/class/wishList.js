// creiamo una classe per la lista dei desideri contenente le pizze preferite
class wishList {
    list = [];

    //ATTENZIONE: studia bene questa parte che è molto contorta
  add(pizza) {
      //facciamo un controllo per evitare di aggiungere un elemento che è presente nell'array ed aumentiamo la quantità di elementi
      
      if(this.list.find(listItem => listItem.slug === pizza.slug)) {
        this.list.map(listItem => {
          if (listItem.slug === pizza.slug) {
            listItem.quantità++;
          }
          return listItem   
        })
      }else{
      pizza.quantità = 1;
      this.list.push(pizza);
    }  
  }
}