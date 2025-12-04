const leia = require("readline-sync");

console.log("=== CARDÁPIO ===");
console.log("| Código | Produto          | Preço    |");
console.log("|--------|------------------|----------|");
console.log("| 1      | Cachorro Quente  | R$ 10.00 |");
console.log("| 2      | X-Salada         | R$ 15.00 |");
console.log("| 3      | X-Bacon          | R$ 18.00 |");
console.log("| 4      | Bauru            | R$ 12.00 |");
console.log("| 5      | Refrigerante     | R$  8.00 |");
console.log("| 6      | Suco de laranja  | R$ 13.00 |");
console.log("");


const codigo = leia.questionInt("Digite o codigo do produto (1 a 6): ");
const quantidade = leia.questionInt("Digite a quantidade comprada: ");

let total = 0;
let produto = "";


switch (codigo) {
    case 1:
        produto = "Cachorro Quente";
        total = quantidade * 10.00;  
        break;
    case 2:
        produto = "X-Salada";
        total = quantidade * 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        total = quantidade * 18.00;
        break;
    case 4:
        produto = "Bauru";
        total = quantidade * 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        total = quantidade * 8.00;
        break;
    case 6:
        produto = "Suco de laranja";
        total = quantidade * 13.00;
        break;
    default:
        console.log("Código inválido!");
        process.exit();
}


console.log("\n=== RESUMO DO PEDIDO ===");
console.log("Produto:", produto);
console.log("Quantidade:", quantidade);
console.log("Total: R$", total.toFixed(2));