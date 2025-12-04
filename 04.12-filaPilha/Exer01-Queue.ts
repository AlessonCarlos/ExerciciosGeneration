
// Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string, 
// para organizar uma fila por ordem de chegada dos Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
// 2: Listar todos os Clientes na fila
// 3: Chamar (retirar) uma pessoa da fila 
// 0: O programa deve ser finalizado. 
// Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.

// ts-node nome do arquivo.ts

//1 - criar o menu
//2 - criar a entradas de dados no Queue
//3 - adicionar as funções solicitadas
import { Queue } from './Queue'
import leia = require('readline-sync')


const fila: Queue<string> = new Queue<string>()
let opcao: number
let nomeCliente: string

do {
console.log('***************************************************************')
console.log('1 - Adicionar Cliente na Fila')
console.log('2 - Listar todos os Cliente da Fila')
console.log('3 - Retirar Cliente da Fila')
console.log('0 - sair ')
console.log('***************************************************************')

opcao = leia.questionInt("Digite um numero: ");

if(opcao === 1) {
        
        console.log("Opção selecionada: Adicionar Cliente")
        console.log("Digite o nome do cliente: ")
        nomeCliente =  leia.question(" ");
        fila.enqueue(nomeCliente);  
        console.log("Cliente Adicionado!")


    } else if(opcao === 2) {
       
        console.log("Opção selecionada: Listar Clientes")
        console.log('Lista de clientes: ', fila.printQueue())  
        
    } else if(opcao === 3) {
        
        console.log("Opção selecionada: Retirar Cliente")
         if (!fila.isEmpty()){  
            let clienteRetirado = fila.dequeue();  
            console.log("O cliente: ",clienteRetirado, " Foi retirado da fila." )
         } else {
            console.log("A fila está vazia")
         }
        
    } else if(opcao === 0) {
        console.log("Programa finalizado!")
        
    } else {
        console.log("Opção inválida! Digite um número entre 0 e 3.")
    }

}while(opcao !== 0)
