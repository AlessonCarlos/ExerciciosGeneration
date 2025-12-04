
//screva um programa para criar uma Collection Set do tipo number. 
//O programa deverá solicitar ao usuário, que ele digite via teclado 10 valores inteiros não repetidos e adicione-os individualmente na Collection Set. Em seguida, faça o que se pede:
//Mostre na tela todos os elementos da Collection Set. 

import leia = require('readline-sync')

const numeros: Set<number> = new Set<number>();

let numerosDigitados: number

for ( let i = 0; i < 10; i++){
    numerosDigitados = leia.questionInt("Digite um numero: ");
     
    numeros.add(numerosDigitados)

}

const arrayDoSet: number [] = Array.from(numeros);

arrayDoSet.sort((a, b) => a - b);

console.log('Seus numeros sao: ', arrayDoSet)


