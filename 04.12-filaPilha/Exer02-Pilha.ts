//Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha. 
// O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
// 1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
// 2: Listar todos os livros da Pilha
// 3: Retirar um livro da pilha 
// 0: O programa deve ser finalizado. 
// Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
import {Stack} from './Stack'

import leia = require('readline-sync')

const livros: Stack<string> = new Stack<string>();
let opcao: number
let tituloLivro: string

do {
console.log('***************************************************************')
console.log('1 - Adicionar Livro na pilha')
console.log('2 - Listar todos os Livros')
console.log('3 - Retirar Livro da pilha')
console.log('0 - sair ')
console.log('***************************************************************')

opcao = leia.questionInt("Digite um numero: ");

if(opcao === 1) {
        
        console.log("Opção selecionada: Adicionar Livro na pilha")
        console.log("Digite o titulo do livro ")
        tituloLivro =  leia.question(" ");
        livros.push(tituloLivro);  
        console.log("Livro Adicionado!")


    } else if(opcao === 2) {
       
        console.log("Opção selecionada: Listar livros")
        console.log('Lista de livros: ', livros.printStack())  
        
    } else if(opcao === 3) {
        
        console.log("Opção selecionada: Remover livro")
         if (!livros.isEmpty()){  
            let removerLivro = livros.pop();  
            console.log("O livro: ",removerLivro, " Foi retirado da fila." )
         } else {
            console.log("A pilha está vazia")
         }
        
    } else if(opcao === 0) {
        console.log("Programa finalizado!")
        
    } else {
        console.log("Opção inválida! Digite um número entre 0 e 3.")
    }

}while(opcao !== 0)
