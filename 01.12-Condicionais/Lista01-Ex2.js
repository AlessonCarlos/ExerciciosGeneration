// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo. Veja os exemplos abaixo:

const leia = require("readline-sync");
let n1 = leia.questionInt("Digite um numero: ");

if(n1 % 2 === 0 && n1 > 0) {
    console.log('O número: ', n1, ' é par e positivo!')
} else if(n1 % 2 !== 0 && n1 > 0){
    console.log('O número: ', n1, ' é impar e positivo!')
} else if(n1 % 2 === 0 && n1 < 0) {
    console.log('O número: ', n1, ' é par e negativo!')
} else {
    console.log('O número: ', n1, ' é impar e negativo!')
}

