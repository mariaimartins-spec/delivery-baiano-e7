
# delivery-baiano-e7

Sistema de pedidos de um delivery de comida baiana: o cliente monta o
pedido, a cozinha atualiza o status e a administradora cuida do cardápio.

## Integrantes

| Nome | Usuário no GitHub |
|---|---|
| Maria Izabel | mariaimartins |
| Kaylane | kaymnzess |
| Maria Paula | mariiawsz |

## Como rodar

Precisa do Node.js 26.

Na pasta do repositório:

    npm install
    npm start
    npm run dev
    npm test
    node src/pedido-agora.js

## Situação

Sprint 1 - Cardápio no ar. Scrum Master: Maria Izabel.

## Regras da Dona Ju

- Pedido mínimo de R$ 30,00 nos itens, sem contar a taxa de entrega.
- Cupom PRIMEIRA10: 10% de desconto nos itens, só na primeira compra.
- Entrega só nos bairros atendidos, cada um com a sua taxa.
- Pedidos das 11h às 22h.
- Pagamento em dinheiro ou Pix, na entrega.

## Bibliotecas

| Biblioteca | Versão | Para quê | Licença |
|---|---|---|---|
| dayjs | ^1.11.23 | data e hora do pedido em português | MIT |

## npm audit

Executado em 17/11/2026: found 0 vulnerabilities.