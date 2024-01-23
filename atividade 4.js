class FrangoAssado {
    constructor() {
      this.preco = 4.50;
      this.ingrediente = "sanduíche de frango assado";
    }
  }
  
  class Pepperoni {
    constructor(sanduiche) {
      this.sanduiche = sanduiche;
      this.preco = 0.99;
      this.ingrediente = "pepperoni";
    }
  
    getPreco() {
      return this.sanduiche.getPreco() + this.preco;
    }
  
    getIngredientes() {
      return `${this.sanduiche.getIngredientes()}, ${this.ingrediente}`;
    }
  }
  
  class QueijoMussarelaRalado {
    constructor(sanduiche) {
      this.sanduiche = sanduiche;
      this.preco = 2.00;
      this.ingrediente = "queijo mussarela ralado";
    }
  
    getPreco() {
      return this.sanduiche.getPreco() + this.preco;
    }
  
    getIngredientes() {
      return `${this.sanduiche.getIngredientes()}, ${this.ingrediente}`;
    }
  }
  
  let sanduiche = new FrangoAssado();
  sanduiche = new Pepperoni(sanduiche);
  sanduiche = new QueijoMussarelaRalado(sanduiche);
  
  console.log(`${sanduiche.getIngredientes()} custa R$${sanduiche.getPreco().toFixed(2)}.`);
  