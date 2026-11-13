
const CARDAPIO = [
  { id: 1, nome: "Acarajé", preco: 1200, estoque: 30, ativo: true },
  { id: 2, nome: "Abará", preco: 2200, estoque: 20, ativo: true },
  { id: 3, nome: "Moqueca de Peixe", preco: 5500, estoque: 10, ativo: false },
  { id: 4, nome: "Bobó de Camarão", preco: 6200, estoque: 10, ativo: false },
  { id: 5, nome: "Maniçoba", preco: 6500, estoque: 10, ativo: false },
  { id: 6, nome: "Xinxim de Galinha", preco: 7000, estoque: 10, ativo: false },
];

function buscarProduto(id) {
  return CARDAPIO.find((produto) => produto.id === id);
}

function listarAtivos() {
  return CARDAPIO.filter((produto) => produto.ativo);
}

module.exports = { CARDAPIO, buscarProduto, listarAtivos };
