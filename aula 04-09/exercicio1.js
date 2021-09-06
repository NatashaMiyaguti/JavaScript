// 1-) Crie uma classe chamada Pessoa com os atributos: nome, sexo, idade. Crie agora outra classe chamada Amigo, que é uma pessoa (herda da classe Pessoa) de quem sabemos o dia de seu aniversário, atributo diaDoAniversario. Instancie (crie) um objeto pessoa e um objeto amigo, exibindo todas as informações em tela.

class Pessoa {
  constructor(nome, genero, idade) {
    this.nome = nome;
    this.genero = genero;
    this.idade = idade;
  }
}

let pessoa = new Pessoa("naty", "feminino", 33);
console.log(pessoa);

class Amigo extends Pessoa {
  constructor(nome, genero, idade, diaAniversario) {
    super(nome, genero, idade);
    this.diaAniversario = diaAniversario;
  }
}

let amigo = new Amigo("naty", "feminino", 33, "10 janeiro")
console.log(amigo);

