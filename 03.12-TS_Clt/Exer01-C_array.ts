
//Escreva um programa para criar uma Collection Array de Objetos do tipo string. 
// O programa deverá solir ao usuário, que ele digite via teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida, faça o que se pede:
//Mostre na tela todas as cores adicionadas. 
//Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.


// solicitar 5 cores e adicionar ao array
// mostrar na tela as cores
// mostrar em ordem crescente

import leia = require('readline-sync')

const listaCores: Array<string> = new Array<string>();

let cores: string;

for ( let i = 0; i < 5; i++){
    cores = leia.question("Digite suas cores: ");
     
    listaCores.push(cores)

}// solicitar 5 cores e adicionar ao array

// mostrar na tela as cores
console.log('Suas cores: ', listaCores)
// mostrar em ordem crescentes
console.log('Cores Ordenadas: ',listaCores.sort())