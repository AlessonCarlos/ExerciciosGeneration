
//Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar um número e o programa deve exibir na tela a posição deste número no vetor. Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela. Veja os exemplos abaixo:


// codigo mostrando o inverso do que foi pedido

// const leia = require("readline-sync");

// // vetor com 10 numeros
// let numeros = ['2','5','1','3','4','9','7','8','10','6']
// let numero = 0;

// for (let i = 0; i < numeros.length; i++) {
//     numero = leia.questionInt('Digite a posicao no vetor que voce quer pesquisar: ')
//     console.log(numeros[numero])
//     if (numero < 0 || numero > 9){
//         console.log('O numero: ',numero,'nao foi encontrado!')
//     }
    
// }
// continuar = leia.keyInYNStrict('Quer continuar?[y/n]')



const leia = require("readline-sync");

// Vetor com 10 números inteiros
let numeros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let continuar = true;


while (continuar) {

    console.log(numeros)
    let numero = leia.questionInt("Digite um numero para pesquisar no vetor: ");
    let encontrado = false; 
    let posicao = -1;

    // Percorre o vetor manualmente
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === numero) {
            encontrado = true;
            posicao = i;
            break; // para o laço quando achar
        }
    }

    // Saída de dados
    if (encontrado) {
        console.log("O numero", numero, "foi encontrado na posicao:", posicao);
    } else {
        console.log("Nao foi encontrado!");
    }

    continuar = leia.keyInYNStrict("Deseja pesquisar outro numero? [y/n] ");
}
