const reais = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const PRECO_ACARAJE = 1200;
const PRECO_ABARA = 1000;
const PRECO_COCADA = 600;
const qtdAcaraje = 2;
const qtdAbara = 1;
const qtdCocada = 1;
const subtotal = PRECO_ACARAJE * qtdAcaraje + PRECO_ABARA * qtdAbara + PRECO_COCADA * qtdCocada;
console.log(`Itens: ${reais.format(subtotal / 100)}`);
