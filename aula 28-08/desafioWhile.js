//Desafio

/* Crie uma LISTA de produtos onde a mesma apresente os seguintes campos: descrição, valor e quantidade. Com base nas informações apresentadas o seu programa deverá mostrar o valor total gasto na compra.
Exemplo: 
Mercado Sexta da Maldade

Descrição: Coca Cola - Valor: R$ 9,00 - Quantidade: 10
Toddynho - R$3,50 - Quantidade: 5
Doritos - R$2,00 - Quantidade 2
O programa deve retornar: Total: 111,50
*/

const products = [
  { descricao: "Coca- cola", valor: 9.0, quantidade: 10 }, //essa linha toda(dicionario é a posicao 0)
  { descricao: "Toddynho", valor: 3.5, quantidade: 5 }, // posicao 1
  { descricao: "Doritos", valor: 2.0, quantidade: 2 }, //posicao 2
];
let total = 0;
let index = 0;

while (index < products.length) {
  const { valor, quantidade } = products[index];

  total = total + valor * quantidade;

  index++;
}

console.log(total);

// const prompt = require ('prompt-sync')();

// function quantidadeProduto (valor) {
//     return +prompt ("Escreva a quantidade de produtos: ")
// }
// let quantidade = 0
// const lista = ["Coca", 9, quantidadeProduto (quantidade), "Toddynho", 3.5, quantidadeProduto (quantidade), "Doritos", 2, quantidadeProduto (quantidade)];

// console.log ("Mercado sexta da Maldade\n")
// let i = 0
// let soma = 0
// while (i < lista.length) {
//     soma = soma + lista[i+1]*lista [i+2]
//     console.log (`${lista [i]} - R$${lista [i+1]}`)
