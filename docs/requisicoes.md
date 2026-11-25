# Requisições da API (Aula 16)

Ligar o servidor: `npm run api`. Testar em outro terminal, no Git Bash.

| # | Requisição | Esperado | Deu certo? |
|---|---|---|---|
| 1 | `curl -i localhost:3000/produtos` | 200, os 5 pratos ativos | |
| 2 | `curl -i localhost:3000/produtos/3` | 200, a moqueca | |
| 3 | `curl -i localhost:3000/produtos/50` | 404, prato 50 não existe | |
| 4 | `POST /pedidos` com 3 acarajés para a Barra às 12h | 201, total 4200 | |
| 5 | `POST /pedidos` para Liberdade | 400, não entregamos em Liberdade | |
| 6 | `POST /pedidos` com o prato 99 | 400, prato 99 não existe | |
| 7 | `curl -i localhost:3000/pedidos/1` | 200, o pedido 1 | |
| 8 | `curl -i localhost:3000/pedidos/999` | 404, pedido 999 não existe | |
| 9 | `PATCH /pedidos/1/status` com "saiu para entrega" | 200, o pedido com o status novo | |
| 10 | `PATCH /pedidos/1/status` com "voando" | 400, status inválido | |
| 11 | `PATCH /pedidos/999/status` com "entregue" | 404, pedido 999 não existe | |
