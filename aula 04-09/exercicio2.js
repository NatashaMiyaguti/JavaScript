// 2 )  Um aluno de graduacao possui as informações de matricula, nome, dataNascimento , codCurso , percentualCobranca.

// Os cursos disponiveis para o aluno de graduacao são:
// ARQUITETURA = 1;
// CIENCIADACOMPUTACAO = 2;
// ENGENHARIA = 3;
// BIOMEDICINA = 4;
// Todo aluno deve poder calcular a mensalidade com base no curso escolhido:

// ARQUITETURA =  450.00;
// CIENCIADACOMPUTACAO  = 650.00;
// ENGENHARIA = 850.00;
// BIOMEDICINA = 750.00;

// O Aluno de pos-graduação possui as mesmas informações do aluno de graduação e, adicionalmente, possui as informaçoes linhaDePesquisa , orientador e bolsaDeEstudos.

// As linhas de pesquisa oferecidas pela Universidade Sabe Tudo são as seguinte:

// CIENCIAS EXATAS = 1
// CIENCIAS HUMANAS = 2
// EDUCAÇÃO = 3
// INOVAÇÃO TECNOLOGICA = 4
// As linhas de pesquisa oferecidas pela Universidade Sabe Tudo são as seguinte:

// O aluno de pós-graduação também possui um método que calcula o valor da mensalidade com base na linha de pesquisa escolhida, conforme abaixo:

// CIENCIAS EXATAS = 1.200,00

// CIENCIAS HUMANAS = 1.600,00

// EDUCAÇÃO = 2.000,00

// INOVAÇÃO TECNOLOGICA = 3.400,00

// O valor da mensalidade do aluno de pós-graduação deve ser calculado considerando a linha de pesquisa e o valor da bolsa de estudos.
// AlunoPosGraduacao.

// Escreva um programa em JavaScript que crie objetos das classes AlunoDeGraduacao e AlunoPosGraduacao, calcule e exiba o valor da mensalidade de cada aluno.

class AlunoGraduacao {
  constructor(matricula, nome, dataNascimento, codCurso, percentualCobranca) {
    this.matricula = matricula;
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.codCurso = codCurso;
    this.percentualCobranca = percentualCobranca;
  }

  Mensalidade() {
    if (this.codCurso == 1) {
      return 450;
    } else if (this.codCurso == 2) {
      return 650;
    } else if (this.codCurso == 3) {
      return 850;
    } else {
      return 750;
    }
  }
}

class AlunoPosGraduacao extends AlunoGraduacao {
  constructor(
    matricula,
    nome,
    dataNascimento,
    codCurso,
    percentualCobranca,
    linhaDePesquisa,
    orientador,
    bolsaDeEstudos
  ) {
    super(matricula, nome, dataNascimento, codCurso, percentualCobranca);
    this.linhaDePesquisa = linhaDePesquisa;
    this.orientador = orientador;
    this.bolsaDeEstudos = bolsaDeEstudos;
  }

  Mensalidade() {
    if (this.linhaDePesquisa ==1){
        return 1200 - this.bolsaDeEstudos

    }else if (this.linhaDePesquisa == 2){
        return 1600 - this.bolsaDeEstudos;

    }else if (this.linhaDePesquisa == 3){
        return 2000 - this.bolsaDeEstudos;
    }else {
        return 3400 - this.bolsaDeEstudos;
    }

  }
}

let aluno1 = new AlunoGraduacao(1212,"naty", 1988, 1,1)
console.log(aluno1)
console.log(aluno1.Mensalidade())

let aluno2 = new AlunoPosGraduacao(333, "wes",1991,2,1,3,"nn",20)
console.log(aluno2)
console.log(aluno2.Mensalidade())