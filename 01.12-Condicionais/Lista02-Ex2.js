const leia = require("readline-sync");

console.log("TABELA DE CARGOS:");
console.log("1 - Gerente (10%)");
console.log("2 - Vendedor (7%)");
console.log("3 - Supervisor (9%)");
console.log("4 - Motorista (6%)");
console.log("5 - Estoquista (5%)");
console.log("6 - Técnico de TI (8%)");
console.log("");

const nome = leia.question("Nome: ");
const codigo = leia.questionInt("Codigo do cargo: ");
const salario = leia.questionFloat("Salario atual: R$ ");

let cargo, percent, novoSalario;

switch (codigo) {
    case 1:
        cargo = "Gerente";
        percent = 10;
        novoSalario = salario * 1.10;
        break;
    case 2:
        cargo = "Vendedor";
        percent = 7;
        novoSalario = salario * 1.07;
        break;
    case 3:
        cargo = "Supervisor";
        percent = 9;
        novoSalario = salario * 1.09;
        break;
    case 4:
        cargo = "Motorista";
        percent = 6;
        novoSalario = salario * 1.06;
        break;
    case 5:
        cargo = "Estoquista";
        percent = 5;
        novoSalario = salario * 1.05;
        break;
    case 6:
        cargo = "Técnico de TI";
        percent = 8;
        novoSalario = salario * 1.08;
        break;
    default:
        console.log("Código errado!");
        process.exit();
}

const aumento = novoSalario - salario;

console.log("");
console.log("------------------------");
console.log("   RECIBO DE REAJUSTE");
console.log("------------------------");
console.log("Nome: " + nome);
console.log("Cargo: " + cargo);
console.log("------------------------");
console.log("Salario anterior: R$ " + salario);
console.log("Aumento: " + percent + "%");
console.log("Valor do aumento: R$ " + aumento);
console.log("------------------------");
console.log("Novo salario: R$ " + novoSalario);
console.log("------------------------");