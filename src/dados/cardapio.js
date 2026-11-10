const CARDAPIO = [
  { id: 1, nome: "Acarajé", preco: 1200, estoque: 30, ativo: true },
  { id: 2, nome: "Abará", preco: 1000, estoque: 20, ativo: true },
];

function buscarProduto(id) {
  return CARDAPIO.find((produto) => produto.id === id);
}

function listarAtivos() {
  return CARDAPIO.filter((produto) => produto.ativo);
}

module.exports = { CARDAPIO, buscarProduto, listarAtivos };