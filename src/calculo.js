
const regras = require("./regras.js");
const { buscarProduto } = require("./dados/cardapio.js");

const reais = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function mostrarPedido(pedido) {
  console.log(`${pedido.bairro}, ${pedido.hora}h`);

  for (const item of pedido.itens) {
    console.log(`   ${item.qtd} x ${buscarProduto(item.id).nome}`);
  }

  const motivo = regras.motivoDaRecusa(pedido);

  if (motivo === "") {
    const total = regras.calcularTotal(pedido);
    console.log(`Total: ${reais.format(total / 100)}`);
  } else {
    console.log(`Recusado: ${motivo}.`);
  }

  console.log("-------------------------");
}

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

for (const pedido of pedidos) {
  mostrarPedido(pedido);
}
