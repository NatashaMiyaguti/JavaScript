let filme = {nome: 'O exorcista', ano: 1973, genero: 'Terror'};

for (let dados in filme){
    console.log (dados  + ': ' + filme[dados]);
}


// para dar console.log  nas chaves vc precisa chamar a var do "for in", no caso aqui é "dados", concatenar com +, caso queira uma string colocar dentro de '', e em seguida chamar o nome da lista e o nome da var em[]