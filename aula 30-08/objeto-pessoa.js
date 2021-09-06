// Objeto é uma coleção de dados e / ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções - que são chamadas de propriedades e métodos qnd estão dentro do objeto.)

//let aluno = {}; // objeto vazio


let pessoa = {

    nome: 'Naty Miyaguti',
    idade :33,
    genero: 'Feminino',
};

console.log(pessoa)

// para pegar uma propriedade do objeto:

console.log(pessoa.nome);

// para criar uma nova propriedade p o objeto pessoa:

pessoa.escolaridade = 'Segundo Grau Completo';

console.log(); // para pular linha
console.log(pessoa);

// para apagar uma propriedade do objeto

delete pessoa.genero;


console.log(pessoa);