// 2.Faça um programa que leia nome e média de um aluno, guardando também a 
// situação em um objeto. No final, mostre o conteúdo da estrutura na tela. A média 
// para aprovação é 7. Se o aluno tirar entre 5 e 6.9 está de recuperação, caso 
// contrário é reprovado

const prompt = require("prompt-sync")();


let aluno = {
  nome : prompt("Digite o nome do aluno: "),
  media: +prompt("Digite a media: "),
  situação: "Aguardando",
  resultado: function(){
    return `O(a) aluno ${this.nome} ficou com media ${this.media}. O resultado final é: ${this.situação}`
  }

}


if (aluno.media >= 7){
  aluno.situação = 'aprovado'
} else if (aluno.media >= 5){
  aluno.situação = 'Recuperção'
}else{
  aluno.situação = 'reprovado'
}

console.log(aluno.resultado())



