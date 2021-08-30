/*#02 - Crie um programa que vai ler vários números e colocar em uma lista. Depois
disso, crie duas listas extras que vão conter apenas os valores pares e os valores
ímpares digitados, respectivamente. Ao final, mostre o conteúdo das três listas
geradas. */

const prompt = require("prompt-sync")();

let listanumeros = [];
let numeroPar = [];
let numeroImpar = [];

let numero= prompt("Digite a quanti numeros: ")
for (let n = 0; n < numero; n++) {
    listanumeros.push(numero);

}
If (numero % 2 == 0) {
    numeroPar.push(numero);
else numeroImpar.push(numero);

}
