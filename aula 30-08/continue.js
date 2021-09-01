// Continue: Com este comando, é possível iniciar a proxima rotinanrepetida do loop. A instrução continue  interrompe uma interação (laço de repetição), se uma condição especifica ocorrer, e continua com a próxima interação no laço de repetição

for (let i = 0; i < 10; i++){
    if (i === 3){
        continue;
    }
    console.log('O numero atual é:' +i);
}