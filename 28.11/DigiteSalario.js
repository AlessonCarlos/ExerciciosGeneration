const leia = require("readline-sync");

let salario = leia.questionFloat("Qual o seu salario: R$ ");
let abono = leia.questionFloat("Qual o seu abono: R$ ");

let novoSalario = salario + abono

console.log("Seu novo salario é: R$", novoSalario)