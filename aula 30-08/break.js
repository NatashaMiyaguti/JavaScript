// O comando break serve para encerrar a leitura, o break é um comando que podemos utilizar qnd queremos parar/ encerrar o laço de repetição na hora. A instrução break interrompe o laço e continua executando após o loup (se houver)

let carros = ['BMW', 'Volvo', 'Saab', 'Ford'];
list : {
    console.log(carros[0]);
    console.log(carros[1]);
    break list;
    console.log(carros[2]);
    console.log(carros[3]);
}