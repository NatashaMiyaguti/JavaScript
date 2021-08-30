/*#01 - Crie um programa onde o usuário possa digitar vários valores numéricos e
cadastre-os em uma lista. Caso o número já esteja lá dentro, ele não será
adicionado. No final, serão exibidos todos os valores únicos digitados, em ordem
crescente. */

const prompt = require("prompt-sync")();

let numeros = [];

let rodadas = prompt("Digite a quantidade de numeros quer cadastrar: ");
for (let n = 0; n < rodadas; n++) {
  let valorUsuario = prompt("Digite um numero: ");

  if (numeros.includes(valorUsuario)== false) { // se numeros contem valor do usuario. devolve True ou False
    numeros.push(valorUsuario);
  }
}

console.log(`${numeros}`);
