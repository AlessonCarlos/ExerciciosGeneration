// Escreva um algoritmo, que leia 2 números inteiros via teclado, 
// onde o primeiro número deve ser menor do que o segundo número. 
// Caso contrário, deve ser exibida uma mensagem na tela informando que o intervalo é inválido e sair do programa. 
//No intervalo informado, mostre na tela todos os números que são múltiplos de 3 e 5. 


// O programa pede a entrada de dois números
const leia = require('readline-sync');
let n1 = leia.questionInt("numero 1: ");
let n2 = leia.questionInt("numero 2: ");

//Condição para que o numero 2 seja maior que o 1
if(n1 > n2) {

            console.log("O numero 1 tem que ser maior que o 2")

}
// O intervalo precisa ser entre o n1 e n2, logo i = n1 | i < n2
for (let i = n1; i <= n2; i++){

            //Logica matematica 
             if(i % 3 === 0 && i % 5 === 0){

                console.log(i)
            }
            
        }
