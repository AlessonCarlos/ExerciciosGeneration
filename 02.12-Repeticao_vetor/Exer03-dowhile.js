// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
// Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos. Veja o exemplo abaixo:

const leia = require('readline-sync')
let numero;
let somaPositivos = 0;

do{
numero = leia.questionInt("Digite um numero: ( zero para sair do programa)")

    if ( numero >= 0){

        somaPositivos += numero
    }


}while (numero!== 0)

    console.log('A soma dos positivos é:',somaPositivos  )
