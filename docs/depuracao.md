# Depuração do bugs.js

Equipe: E7
Data: 27/10/2026
Quem digitou: (Maria Paula)
Quem registrou: (Maria Izabel)
Quem revisou o pull request: (Kaylane)

## O pedido do bugs.js

2 acarajés de R$ 12,00, 1 cocada de R$ 6,00, bairro Barra (taxa de exemplo R$ 6,00), cupom PRIMEIRA10.

## Esperado x o que o programa mostrou

| Valor | Esperado (conta na mão) | O programa mostrou |
|---|---|---|
| Itens | R$ 30,00 (2 × 12,00 + 6,00) | R$ 30,00 |
| Desconto | R$ 3,00 (10% de 30,00, só nos itens) | R$ 3,01 |
| Taxa | R$ 6,00 | R$ 0,06 |
| Total | R$ 33,00 (30,00 − 3,00 + 6,00) | R$ 27,05 |
| Aceito ou recusado | Aceito (itens = R$ 30,00, que é o mínimo) | Recusado |

## Hipóteses, testes e resultados

Uma linha por hipótese, na ordem em que a equipe testou. Hipótese descartada também entra.

| # | Observação | Hipótese | Teste | Resultado | Linha e correção |
|---|---|---|---|---|---|
| 1 | a taxa mostrou R$ 0,06 em vez de R$ 6,00 | a taxa da Barra foi escrita em reais, mas o programa guarda tudo em centavos | `console.log(taxaEntrega)` depois do bloco do bairro: mostrou `6`, enquanto os outros bairros usam 500, 700 e 900 | confirmada | linha 35: `6` virou `600` |
| 2 | depois da correção 1, o desconto mostrou R$ 3,60 em vez de R$ 3,00 | o subtotal está errado e por isso o desconto sobe | console.log(subtotal) dentro do laço: mostrou 2400 e depois 3000, e o subtotal final é R$ 30,00.| descartada | nenhuma: o laço das linhas 25 a 28 está certo |
| 3 | o desconto continuou R$ 3,60 | o desconto está sendo calculado sobre itens + taxa (R$ 36,00), mas a regra diz só nos itens | `console.log(subtotal, taxaEntrega, desconto)`: mostrou `3000 600 360`, e 360 é 10% de 3600 | confirmada | linha 45: `(subtotal + taxaEntrega) * 10 / 100` virou `subtotal * 10 / 100` |
| 4 | Itens R$ 30,00, mas "Pedido recusado" | a constante `PEDIDO_MINIMO` está com o valor errado | `console.log(PEDIDO_MINIMO)`: mostrou `3000`, que é R$ 30,00 | descartada | nenhuma: a constante da linha 14 está certa |
| 5 | o pedido de R$ 30,00 em itens foi recusado | a comparação usa `>`, e o pedido que é exatamente o mínimo deveria ser aceito | `console.log(subtotal, PEDIDO_MINIMO, subtotal > PEDIDO_MINIMO)`: mostrou `3000 3000 false` | confirmada | linha 53: `>` virou `>=` |

## Saída final, depois das correções

```
Itens:    R$ 30,00
Desconto: R$ 3,00
Taxa:     R$ 6,00
Total:    R$ 33,00
Pedido aceito
```

## O que a equipe aprendeu

O erro da taxa escondia o do desconto: com a taxa em R$ 0,06, o desconto de R$ 3,01 parecia quase certo. Por isso corrigimos uma linha de cada vez e rodamos de novo depois de cada correção. Olhar os valores com `console.log` no meio do cálculo, e não só o resultado final, mostrou onde estava cada defeito, e as hipóteses descartadas nos disseram o que já estava certo.
