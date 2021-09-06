let pessoa3 ={
    nome: 'Renato Pordeus Furtado',
    idade: 17,
    genero: 'Masculino',

};

pessoa3.interesses = ['Dinheiro', 'Vestibular', 'Cinema', 'Programação'];

console.log(pessoa3);

// Vamos criar uma lista(array)) no objeto

//this é usado, pois nos referimos ao objeto atual, ou seja, o objeto pessoa. Usar o this é dar valor semântico ao código

pessoa3.bio = function(){

    return `Meu nome é ${this.nome}, tenho ${this.idade}, sou do genero ${this.genero} e meus interesses são: ${this.interesses[0]},  ${this.interesses[1]},  ${this.interesses[2]}, e  ${this.interesses[3]}.`
}

console.log(pessoa3.bio());