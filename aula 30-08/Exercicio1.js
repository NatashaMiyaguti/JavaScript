// Tarefa 01:
// Crie catálogo de filmes com 5 filmes, cada filme precisa ser um objeto, 
// cada objeto precisa ter os seguintes atributos:
// - Nome
// - Duração
// - Ano
// - Diretor
// - Atores principais(lista)
// - Dados (função anônima que retorna uma string com os dados do filme)
// No final mostra no console os dados de todos os filmes ao mesmo 
// tempo.

// Tarefa 02 - Desafio:
// Insira esses 5 filmes dentro de uma lista 
// chamada catalogo, e mostre na tela os 
// dados de cada um varrendo a lista com 
// um for

const filme1 = {
    
    nome: 'Cruella',
    duração: 134,
    ano: 2021,
    atoresPrincipais: ['Emma Stone', 'Emma Tompson'],
    dados() {
    return `O filme é ${this.nome}, duração ${this.duração} minutos, ano ${this.ano}, os atores principais $(this.atoresPrincipais[0]), (this.atoresPrincipais[1])`
  
  },
};


const filme2 = {

  nome: "O Estranho Mundo de Jack",
  duração: 76,
  ano: 1993,
  atoresPrincipais: ["Danny Elman","Catherine O'Hara"],

    dados() {
    return `O filme é ${this.nome}, duração ${this.duração} minutos, ano ${this.ano}, os atores principais $(this.atoresPrincipais[0]), (this.atoresPrincipais[1])`
  
  },
};
  

const filme3 = {

  nome: "Noiva Cadáver",
  duração: 77,
  ano: 2005,
  atoresPrincipais: ["Jhonny Depp", "Christopher Lee"],

     dados() {
    return `O filme é ${this.nome}, duração ${this.duração} minutos, ano ${this.ano}, os atores principais $(this.atoresPrincipais[0]), (this.atoresPrincipais[1])`
  
  },
};
  

const filme4 = {
  nome: "Antes de Você",
  duração: 110,
  ano: 2016,
  atoresPrincipais: ["Emilia Clarke", "Sam Claflin"],


     dados() {
    return `O filme é ${this.nome}, duração ${this.duração} minutos, ano ${this.ano}, os atores principais $(this.atoresPrincipais[0]), (this.atoresPrincipais[1])`
  
  },
};
  

const filme5 = {
  nome: "Doce Novembro",
  duração: 119,
  ano: 2001,
  atoresPrincipais: ["Charlize Theron", "Keanu Reeves"],

  dados() {
    return `O filme é ${this.nome}, duração ${this.duração} minutos, ano ${this.ano}, os atores principais $(this.atoresPrincipais[0]), (this.atoresPrincipais[1])`;
  },
};
  
console.log(filme1.dados());
console.log(filme2.dados());
console.log(filme3.dados());
console.log(filme4.dados());
console.log(filme5.dados());

catalogo = [filme1, filme2, filme3, filme4,filme5];

for (let percorre of catalogo) {
  console.log(percorre);
}