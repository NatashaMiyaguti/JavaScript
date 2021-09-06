// Exercício Treino 1 - Escreva uma função que recebe dois parâmetros (números) e imprime o menor dos dois. Se eles forem iguais, imprima que são valores idênticos.

function compara(a, b) {
  if (a < b) {
    console.log(a);
  } else if (a > b) {
    console.log(b);
  } else {
    console.log("Os valores são iguais");
  }
}

compara(2, 2);

// Exercício Treino 2 - Escreva uma função que recebe dois números (a e b) como parâmetro e retorna True caso a soma dos dois seja maior que um terceiro parâmetro, chamado limite.

function verificaLimite(a, b, limite) {
  if (a + b > limite) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaLimite(1, 4, 6));

/*Ou da para fazer assim:

function verificaLimite2(a, b, limite){
    return (a + b) > limite;
}

console.log (verificaLimite2(1,4,6))*/

// EXERCÍCIO TREINO 3 - Crie uma função que receba uma string como argumento e retorne a mesma string em letras maiúsculas. Faça uma chamada à função, passando como parâmetro uma string.

function letraMaiuscula(frase) {
  return frase.toUpperCase();
}

console.log(letraMaiuscula("Olá Mundo!"));

// Exercício 4 - Crie um programa que tenha uma função chamada voto () que vai receber como parâmetro o ano de nascimento de uma pessoa, retornando um valor literal indicando se uma pessoa tem voto NEGADO, OPCIONAL ou OBRIGATORIO nas eleições.

const prompt = require("prompt-sync")();

var anoAtual = new Date().getFullYear();

function voto(ano) {
  const idade = anoAtual - ano;
  if (idade < 16) {
    return "NEGADO";
  } else if (idade < 18 || idade > 70) {
    return "OPCIONAL";
  } else {
    return "OBRIGATÓRIO";
  }
}

console.log(voto(2004));

// Exercício 6 
// Um professor, muito legal, fez 3 provas durante um semestre, mas só vai levar em conta as duas notas mais altas para calcular a média.
// Faça uma aplicação que peça o valor das 3 notas, mostre como seria a média com essas 3 provas, a média com as 2 notas mais altas, bem como sua nota mais alta e sua nota mais baixa.


function media(a,b,c){
  var media3 = (a + b + c) / 3;
  var ordenadas = [parseInt(a), parseInt(b), parseInt(c)].sort(function(a,b){
    return a - b; // sort é a função que compara um com outro para colocar em ordem crescente
  });
  
  var media2 = (ordenadas[1] + ordenadas[2]) / 2

  console.log (`A média das 3  notas ${a}, ${b}, e ${c} é: ${media3}`)
  console.log(`As duas maiores notas são: ${ordenadas[1]}, e ${ordenadas[2]}, sendo a média: ${media2}`)
  console.log(`A nota mais alta é ${ordenadas[2]}, e a mais baixa é ${ordenadas[0]}`)

}
media(10,8,2)
