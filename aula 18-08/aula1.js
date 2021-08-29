const prompt = require('prompt-sync')();

//1.elabore um programa que escreva seu nome,endereçp e telefone

console.log ('Olá, mundo! Esse é o meu primero programa em JS')

const nome = prompt ('Digite o nome: ');
const endereco = prompt ('Digite o endereço: ');
const telefone = prompt ('Digite o telefone');

console.log(nome);
console.log(endereco);
console.log(telefone);


//2.peça ao usuario o nome e apresente ele com a mensagem bem vindo( no caso cria uma var e concatena com a mensagem do console)

const nome1 = prompt ('Digite seu nome: ');

console.log ('Olá,' + nome1 + ' bem vindo ao mundo');

//3. elabore um programa que receba dois numeros inteiros e mostre a soma deles

const numeroUm = 7;
const numeroDois = 20;

let soma = numeroUm + numeroDois;

console.log(soma);


//4. elabore um programa que receba 3 notas e mostre a media

let nota1= +prompt ('nota1: ');
let nota2= +prompt ('nota2: ');
let nota3= +prompt ('nota3: ');

let media = (nota1 + nota2 + nota3) / 3;

console.log('A nota 1 é: ' + nota1);
console.log('A nota 2 é: ' + nota2);
console.log('A nota 3 é: ' + nota3);

console.log ('A sua média é ' +media);

// elabore um programa q receba dois numeros inteiros, e mostre se o primeiro valor é igual ou maior que o segundo valor

const num1 = prompt ('Digite um numero: ');
const num2 = prompt ('Digite um  outro numero: ');

console.log (num1 <= num2); //devolve True ou False