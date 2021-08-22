/*DESAFIO 02
Jogo da adivinhação
Escreva um programa que faça o computador “pensar” em um número inteiro entre 0 e 10 e peça para o usuário tentar descobrir qual foi o número escolhido pelo computador. O programa deverá escrever na tela se o usuário venceu ou perdeu.
*/
const prompt = require('prompt-sync')();

let comp = Math.floor(10* Math.random(11))
let numero = parseInt(prompt('Tente descobrir o número que o computador escolher. Digite um numero: '));
//paseInt para conerter o numero em Int
if (numero === comp) {
    console.log (`Você digitou o numero ${numero} e o coomputador ${comp}. Você ganhou!` )
} else{

    console.log ( `Você digitou o numero ${numero} e o coomputador ${comp}. Você perdeu!` )
}







