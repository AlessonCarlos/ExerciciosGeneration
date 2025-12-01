//Leia quatro valores (n1, n2, n3, n4). A seguir, calcule e mostre a diferença do produto entre o n1 e n2 pelo produto entre o n3 e o n4.
const leia = require('readline-sync');
let n1 = leia.questionInt("numero 1: ");
let n2 = leia.questionInt("numero 2: ");
let n3 = leia.questionInt("numero 3: ");
let n4 = leia.questionInt("numero 4: ");

let diferenca = (n1 * n2) - (n3 * n4)

console.log("Diferenca: ", diferenca)

 