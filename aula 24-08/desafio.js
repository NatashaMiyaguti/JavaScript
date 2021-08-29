// Crie um script que pergunte 3 números ao usuário (usando for!), coloque em um array, depois exiba tal array.

// Depois use um for para percorrer esse Array, e pergunte para o usuário o novo valor que ele quer colocar em cada posição. (Por exemplo: "Digite um novo valor para a posição 1", "Digite um novo valor para a posição 2", etc...). Substitua o valor na lista original, para o novo valor entrado pelo usuário.

const prompt = require("prompt-sync")();

let lista = [0,0,0];
let listaFinal = [];

for (let item in lista){ // for in ele pega o index, no caso a posição(exceto qnd é uma lista de dicionario. O for of pega p valor de cada ele mento da lista)
    let novoElemento = prompt ('Digite um valor: ');
    listaFinal.push(novoElemento);
}
console.log(listaFinal);

let count = 0;

for (let item of listaFinal){
     let novoValor = prompt (`Digite um novo valor para a posição ${count}: `);
     listaFinal.splice(count,1,novoValor);
     count = count + 1;
}
console.log (listaFinal);


// Ou

// for (let item in listaFinal) {
//   let novoValor = prompt(`Digite um novo valor para a posição ${item}: `);
//   listaFinal.splice(item, 1, novoValor);
// }
// console.log(listaFinal);