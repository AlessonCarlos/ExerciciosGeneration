const leia = require("readline-sync");
let salario = Number(leia.question("Qual o seu Salario: R$"));
let abono = Number(leia.question("Qual o seu abono: R$"));

let novoSalario = salario + abono

console.log("Seu novo salario é: R$", novoSalario)