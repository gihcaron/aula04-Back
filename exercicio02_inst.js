class Pizza {
    constructor(base,molho,cobertura,queijo){
        this.base = base;
        this.molho = molho ;
        this.cobertura = cobertura;
        this.queijo = queijo;
       
    }
mostrarPizza(){
    console.log(`Olá, sua pizza terá a base de ${this.base} ao molho ${this.molho}. A cobertura será de ${this.cobertura} com o queijo ${this.queijo}. `);
}
}

const pedido = new Pizza("massa com borda recheada", "branco", "Brocolis e Bacon", "Mussarela");

pedido.mostrarPizza();
