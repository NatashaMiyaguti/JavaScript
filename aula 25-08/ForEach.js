
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDo2(item) {
  console.log(item * 2);
}

numeros.forEach(tabuadaDo2);

for (let item of numeros) {
  tabuadaDo2(item);
}

//forEach é um metodo, vem acompanhado de uma função

let arraysNumeros = [1,2,3,4,5,6];
function verificaPares(elemento){
    if (elemento % 2 == 0) {
    console.log(elemento);
    console.log('ORGULHO DE SER BLUEMER')
}
}

arraysNumeros.forEach(verificaPares);