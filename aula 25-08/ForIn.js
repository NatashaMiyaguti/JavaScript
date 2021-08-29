// Laço For In

/* for (variavel) in objeto{
    Codigo a ser executado
}
*/

//lista ->  let filme = ['chuck','it']
//dicionario -> let netflix {terror: 'chuck', desenho: 'totoro'}

let carro = {modelo:'A3 Sedan', marca: 'Audi', ano: 2022} //dicionario

for (let caracteristicas in carro){
    console.log(caracteristicas + ':' + carro [caracteristicas]);
}

//para rodaar no terminal -> node ForIn