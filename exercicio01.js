
const alunoObjeto = new Object();
alunoObjeto.nome="Maria";
alunoObjeto.turma= "2TDS3";
alunoObjeto.registro= "1245";
console.log(alunoObjeto);
// Mudanças ------------------------
alunoObjeto.turma = "3TDS3"
console.log(alunoObjeto);

const livroObjeto = new Object();
livroObjeto.titulo="Amor não é Obvio";
livroObjeto.autor= "Elayne Baeta";
livroObjeto.ano=2019;

const carro = new Object();
carro.cor="rosa-pink";
carro.modelo="Hilux";
carro.ano= "2027";
console.log(carro);
// Mudanças ------------------------
carro.ano = 2026;
console.log(carro);

const filme = new Object();
filme.titulo="De repente 30";
filme.diretor="Marcelo Devs";
filme.anoLancamento = "2004";

const cachorro = new Object();
cachorro.nome="José Carlos";
cachorro.raca="Collie";
cachorro.cor="Dourado (Tipo Lessie) ";


const produto = new Object();
produto.descrição = " Colar com Joia Rara";
produto.marca = "Vivara";
produto.preco = "R$1.000.000.000";

console.log(livroObjeto);
console.log(filme);
console.log(cachorro);
console.log(produto);