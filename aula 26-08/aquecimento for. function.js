//Faça um programa q exiba os numeros de 0 a 10, e na frente de 10 a 0. Separado com -

let i2 = 10;
for (let i = 0; i < 11; i++){
console.log(`${i} - ${i2 - 1}`);
}


// COM FUNCAO:

function mostrar(a, b){
    console.log(`${a} - ${b}`);

}

let a = 0;
let b =10;
for (let i = 0; i <11; i++){
    mostrar(a, b);
    a++;
    b--;
}