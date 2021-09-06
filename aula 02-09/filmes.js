const prompt = require('prompt-sync')();

const filme = {
  nome: "Click",
  duração: 107,
  ano: 2006,
  atores: ["Adam Sandler", "Kate Brekinsale", "Christopher Walken"],
};



console.log(filme);

//Usando keys --> imprima as chaves (atributos) no meu objeto em forma de lista

console.log(Object.keys(filme));

//Object.values (Pronuncia: velhos) --> Imprime todos os valores do meu objeto em forma de lista

console.log(Object.values(filme));

//Object.entries --> imprime todas as chaves e todos os valores do seu obrjeto em forma de lista

console.log(Object.entries(filme));

// Iterando objetos a partir da lista gerada pelo Object.keys com for "normal"

const props = Object.keys(filme);
for(let i = 0; i < props.length; i++) {
  let key = props[i];
  console.log(filme[key]);
}

//para cada i que eu tenho dentro do tamanho do objeto, encremente +1 no i para passar no objeto