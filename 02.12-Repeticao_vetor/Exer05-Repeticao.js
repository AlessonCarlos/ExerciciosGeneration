
//Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
// Ao final, mostre na tela a média de todos os números digitados, que sejam múltiplos de 3

// 1 - pegar um numero pelo terminal
// 2 - ver se o número é multiplo de 3
// 3 -se for multiplo de 3, somar em algum lugar
// 4 - tirar média de todos os multiplos somados
// 5 - Encerrar ao digitar zero


// falta terminar


const leia = require('readline-sync')

let numero
let soma = 0
let total = 0
let continuar = true

while(continuar) {
numero = leia.questionInt('Digite um numero: ')

if(numero % 3 == 0){
    soma = soma + numero
    total++
}
if(numero == 0){
    continuar = false
}

}

console.log('total de numeros: ' + total);
console.log('soma dos numeros: ' + soma);
console.log('media: ' + soma/total)
