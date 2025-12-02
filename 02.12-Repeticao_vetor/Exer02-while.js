//Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), via teclado
//e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
//e o total de pessoas cuja idade, seja maior que 50 anos. 
//A leitura dos dados deve ser finalizada ao digitar uma idade negativa.


//Entrada de dados
const leia = require('readline-sync')
// variavel de controle
let idade = 0;

//variaveis menor e maior idade

let menorIdade21 = 0;
let maiorIdade50 = 0;
let idadeneutra = 0;

idade = leia.questionInt('Digite uma idade: ');

//Condicional
while(idade >= 0){

    //condicionais
    if(idade < 21){
        menorIdade21++;
    }
    if(idade > 50){
        maiorIdade50++
    }
    if(idade > 21 && idade < 50){
        idadeneutra++
    }

idade = leia.questionInt('Digite outra idade, ou um numero negativo para sair: ');

}

console.log("Total de pessoas com menos de 21 anos:", menorIdade21);
console.log("Total de pessoas com mais de 50 anos:", maiorIdade50);
console.log("total de pessoas com idades entre 21 e 50:", idadeneutra)

