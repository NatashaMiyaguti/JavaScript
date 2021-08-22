const prompt = require('prompt-sync')();

//EXERCICIOS CODELAB 
/*DESAFIO 01
Reajuste salarial
As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.
Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:
salários até R$ 280,00 (incluindo) : aumento de 20%
salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
salários de R$ 1500,00 em diante : aumento de 5%
Após o aumento ser realizado, informe na tela:
o salário antes do reajuste;
o percentual de aumento aplicado;
o valor do aumento;
o novo salário, após o aumento."
 */


 let salario = +prompt('Digite o valor do salario: ');
 let aumentoPorcentagem = 0;
 let valorAumento = 0;
 let salarioFinal = 0;

 if (salario < 280.00) {
    aumentoPorcentagem = 20;
    valorAumento = (aumentoPorcentagem /100)*salario;
    salarioFinal = (salario + valorAumento)
 }

 else if (salario >= 280.00 || salario > 700.00) {
    aumentoPorcentagem = 15;
    valorAumento = (aumentoPorcentagem /100)*salario;
    salarioFinal = (salario + valorAumento)
 }

 else if (salario > 700.00 || salario > 1500.00) {
    aumentoPorcentagem = 10;
    valorAumento = (aumentoPorcentagem /100)*salario;
    salarioFinal = (salario + valorAumento)
 }

 else {
    aumentoPorcentagem = 5;
    valorAumento = (aumentoPorcentagem /100)*salario;
    salarioFinal = (salario + valorAumento)
 }
 
 console.log('\n O salario sem ajuste é R$' +salario + '\n ');
 console.log('O percentual de aumento é ' +aumentoPorcentagem + '%\n ');
 console.log('O valor do aumento é R$' +valorAumento + '\n ' );
 console.log('O valor final do salario R$' +salarioFinal)

 //console.log(F.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})