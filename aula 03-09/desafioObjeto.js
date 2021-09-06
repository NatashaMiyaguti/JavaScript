// 3. Desafio : Crie um programa que leia nome, ano de nascimento e carteira de
// trabalho e cadastre-os (com idade) em um objeto. Se por acaso a CTPS for diferente
// de 0, o objeto receberá também o ano de contratação e o salário. Calcule e
// acrescente , além da idade , com quantos anos a pessoa vai se aposentar. Considere
// que o trabalhador deve contribuir por 35 anos para se aposentar.

const prompt = require("prompt-sync")();

var ano = new Date().getFullYear();
console.log(ano)
let cadastro = {
  nome: prompt("Digite o nome:"),
  anoNascimento: +prompt("Digite o ano do nascimento: "),
  carteira: +prompt("Digite o numero da carteira de trabalho: "),
  
};
cadastro.idade = ano - cadastro.anoNascimento;

if (cadastro.carteira != 0) {
  cadastro.anoContratacao = +prompt("Digite o ano de contratação: ");
  cadastro.salario = prompt("Digite o valor de salário: ");
  var anoAposentadoria = cadastro.anoContratacao + 35;
  cadastro.idadeAposentadoria = anoAposentadoria - cadastro.anoNascimento;
}

console.log(cadastro);
