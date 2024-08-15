class Pessoa {
    constructor(nome1,idade,altura){
        this.nome = nome1;
        this.idade = idade ;
        this.altura = altura;

    }
seApresentar(){
    console.log(`Olá, meu nome é ${this.nome}. Tenho ${this.idade} anos de idade e tenho ${this.altura} de altura. `);
}
}

const user = new Pessoa("Ameinda Lavada", 89, 2.0);
const user1 = new Pessoa("Karina", 3, 1.31);

//console.log(user);
user.seApresentar();
//console.log(user1);