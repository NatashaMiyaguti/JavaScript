// exemolo I

let resultado = "";
let g = 0

while (g < 8){
    g += 1 // g+= 1 igual g = g+1
    resultado += g // resultado = resultado + g
}
 
//exemplo II - Do.....while:

let resultado2 = "";
let i = 0;

do {
    //acoes do programa

    i = i +1;
    resultado2 = resultado2 +i;
} while (i < 5);

console.log(`Resultado do DO WHILE":` + resultado2);

//exemplo III - Do.....while:

let resultado3 = "";
let x = 0;
while (x < 5) {
    resultado3 = resultado3 + x;
    x = x + 1;
    

    console.log(`Resultado do WHILE":` + resultado3);
}