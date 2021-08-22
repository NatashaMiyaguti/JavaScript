/*#DESAFIO 3
Caixa eletrônico
Faça um Programa para um caixa eletrônico. O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
const prompt = require('prompt-sync')();

let valor_saque= parseInt(prompt('Qual o valor deseja sacar:  '));

if (valor_saque < 10  || valor_saque >600) {
  console.log('Esse valor é inferior ou superior para saque');
}
else{
  const nota100 = parseInt(valor_saque /  100);
  const resto100 = valor_saque % 100;
  const nota50 = parseInt(resto100 / 50);
  const resto50 = resto100 % 50;
  const nota10 = parseInt(resto50 / 10);
  const resto10 = resto50 % 10;
  const nota5 = parseInt(resto10 / 5);
  const resto5 = resto10 % 5;

  console.log (`O valor do saque ${valor_saque}\nA quantidade de nota de R$100 é ${nota100}\nA quantidade de nota de R$50 é ${nota50}\nA quantidade de nota de R$10 é ${nota10}\nA quantidade de nota de R$5 é ${nota5}\nA quantidade de nota de R$1 é ${resto5}`)
}