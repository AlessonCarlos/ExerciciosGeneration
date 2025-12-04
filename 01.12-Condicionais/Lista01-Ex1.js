// 1.Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require("readline-sync");
let n1 = leia.questionInt("numero 1: ");
let n2 = leia.questionInt("numero 2: ");
let n3 = leia.questionInt("numero 3: ");

soma = n1 + n2
if(n1+n2 > n3) {
    console.log('A soma de n1=',n1,"+ n2=",n2,"= ", soma, "É maior que n3=",n3)
} else {
    console.log('o numero n3=',n3," é maior que a soma de n1=",n1,'+ n2=',n2,"= ", soma,)
}
