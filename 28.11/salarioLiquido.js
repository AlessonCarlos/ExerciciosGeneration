// Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, 
// as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido. Veja o exemplo abaixo:

const leia = require("readline-sync");
let salarioB = Number(leia.question("Salario Bruto: R$ "));
let adicionalN = Number(leia.question("Adicional Noturno: R$ "));
let horasE = Number(leia.question("Horas Extras: R$ "));
let descontos = Number(leia.question("Descontos: R$ "));

let salarioL = salarioB + adicionalN + (horasE * 5) - descontos

console.log("Salario Liquido: R$", salarioL)