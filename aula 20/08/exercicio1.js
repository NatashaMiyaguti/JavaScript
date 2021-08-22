// Faça um programa que pergunte ao usuário um número e valide se é par ou ímpar:
// Crie uma variável para receber o valor, com conversão para int
// Para um número ser par, a divisão dele por 2 tem que dar resto 0

const prompt = require('prompt-sync')();


const numero = parseInt(prompt('Digite um numero: '));
if(numero % 2 == 0) {
    console.log(`Você digitou ${numero}, esse numero é par.`)
}
else{
    console.log(`Você digitou ${numero}, esse numero é ímpar.`)
}
