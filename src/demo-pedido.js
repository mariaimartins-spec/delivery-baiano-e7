// src/demo-pedido.js - monta dois pedidos com as classes
import Produto from "./models/Produto.js";
import Pedido from "./models/Pedido.js";
import { buscarProduto } from "./dados/cardapio.js";

const reais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

function criarProduto(id) {
  const dados = buscarProduto(id);
  return new Produto(dados.id, dados.nome, dados.preco, dados.estoque, dados.ativo);
}

const acaraje = criarProduto(1);
const abara = criarProduto(2);

const pedido1 = new Pedido("Barra", 12);
pedido1.adicionarItem(acaraje, 2);
pedido1.adicionarItem(abara, 1);

for (const item of pedido1.itens) {
  console.log(`${item.qtd} x ${item.produto.nome}`);
}
console.log(`Total: ${reais.format(pedido1.total() / 100)}`);

const pedido2 = new Pedido("Rio Vermelho", 12);
pedido2.adicionarItem(acaraje, 1);
pedido2.adicionarItem(abara, 1);
console.log(`Pedido 2: ${reais.format(pedido2.total() / 100)}`);