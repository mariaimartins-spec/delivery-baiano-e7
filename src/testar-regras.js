// src/testar-regras.js - confere as regras do regras.js
// Rodar na pasta do repositório: node src/testar-regras.js
// console.assert fica quieto quando a regra acerta e avisa quando erra.
const regras = require("./regras.js");

console.log("Testando as regras...");

// Cada regra sozinha, com dados de exemplo
console.assert(regras.calcularSubtotal([1200, 600], [2, 1]) === 3000, "subtotal: 2 x R$ 12,00 + 1 x R$ 6,00");
console.assert(regras.calcularTaxa("Lua") === 0, "bairro fora da área não tem taxa");
console.assert(regras.calcularDesconto(3000, "PRIMEIRA10", true) === 300, "PRIMEIRA10 dá 10% na primeira compra");
console.assert(regras.calcularDesconto(3000, "PRIMEIRA10", false) === 0, "PRIMEIRA10 só vale na primeira compra");
console.assert(regras.dentroDoHorario(11) === true, "11h em ponto aceita");
console.assert(regras.dentroDoHorario(22) === false, "22h em ponto recusa");
console.assert(regras.subtotalDosItens([{ id: 1, qtd: 2 }, { id: 2, qtd: 1 }]) === 4600,
"itens: 2 Acarajés + 1 Abará");

// Os 5 cenários do pedido: Passo 5

console.log("Fim. Se nenhum Assertion failed apareceu acima, tudo passou.");
const pedidos = [
  {
    itens: [{ id: 1, qtd: 2 }, { id: 2, qtd: 1 }, { id: 6, qtd: 1 }],
    bairro: "Barra",
    hora: 12,
    primeiraCompra: false,
    cupom: "",
  },
  {
    itens: [{ id: 5, qtd: 2 }],
    bairro: "Rio Vermelho",
    hora: 19,
    primeiraCompra: true,
    cupom: "PRIMEIRA10",
  },
  {
    itens: [{ id: 1, qtd: 1 }, { id: 6, qtd: 1 }],
    bairro: "Pituba",
    hora: 12,
    primeiraCompra: false,
    cupom: "",
  },
  {
    itens: [{ id: 3, qtd: 1 }],
    bairro: "Itapuã",
    hora: 22,
    primeiraCompra: false,
    cupom: "",
  },
  {
    itens: [{ id: 4, qtd: 1 }],
    bairro: "Liberdade",
    hora: 13,
    primeiraCompra: false,
    cupom: "",
  },
];