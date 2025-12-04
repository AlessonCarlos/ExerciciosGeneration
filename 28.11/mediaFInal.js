//Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. Veja o exemplo abaixo:

const leia = require("readline-sync");
let nota1 = Number(leia.question("Qual a sua primeira nota: "));
let nota2 = Number(leia.question("Qual a sua segunda nota: "));
let nota3 = Number(leia.question("Qual a sua terceira nota: "));
let nota4 = Number(leia.question("Qual a sua quarta nota: "));

let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

console.log("Sua média final é: ", mediaFinal)