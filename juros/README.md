# Juros para programadores

> Juro é a remuneração cobrada pelo empréstimo de dinheiro. É expresso como um percentual sobre o valor emprestado (taxa de juro) e pode ser calculado de duas formas: juros simples ou juros compostos.
O juro pode ser compreendido como uma espécie de "aluguel sobre o dinheiro". A taxa seria uma compensação paga pelo tomador do empréstimo para ter o direito de usar o dinheiro até o dia do pagamento. O credor, por outro lado, recebe uma compensação por não poder usar esse dinheiro até o dia do pagamento e por correr o risco de não receber o dinheiro de volta (risco de inadimplência).

*fonte: [https://pt.wikipedia.org/wiki/Juro](https://pt.wikipedia.org/wiki/Juro)*


Então vamos pensar:

> Se eu emprestar R$100 a uma taxa de juros de 10% por mês e pagar em 1 mês, então eu terei que pagar R$110.

Correto, porém de uma forma simplória. Vamos agora inferir como calcular esse juro. 


## Juros Simples


> No regime dos juros simples, a taxa de juros é aplicada sobre o valor inicial de forma linear em todos os períodos, ou seja, não considera que o valor sobre o qual incidem juros aumenta (ou diminui) ao longo do tempo.


Vamos pegar nosso exemplo passado e modifica-lo um pouco:

> Se eu emprestar R$100 a uma taxa de juros de 10% por mês e pagar em 10 meses, então eu terei que pagar 10% de R$100 em cada parcela sem que esse valor altere.

Vamos colocar isso em forma de algoritmo:


```
var valor = 100 // R$
var taxaDeJuros = 10 // %
var parcelas = 2

var valorPorParcela = valor * (taxaDeJuros/100) 
// 100 * (10/100) = 100 * 0.1 = R$10

var valorTotalAPagar = (valor) + (parcelas * valorPorParcela)
```

Creio que ficou mais simples de entender assim, certo? Melhor em forma de código:

```js
const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => valor * ( taxaDeJuros / 100 ) 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => 
  ( valor ) + ( parcelas * valorPorParcela(valor, taxaDeJuros) )

console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))
// 120
```

## Juros Compostos

> No regime de juros compostos, os juros de cada período são somados ao capital para o cálculo de novos juros nos períodos seguintes. Nesse caso, o valor da dívida é sempre corrigida e a taxa de juros é calculada sobre esse novo valor.


Agora vamos pensar que em vez do valor de cada parcela ser fixo ele deverá ser **re**-calculado a cada parcela para aplicar a taxa de juros em cima da parecela para soma-la ao total da dívida, vamos utilizar como exemplo nosso algoritmo anterior como base e modifica-lo da seguinte maneira: 


```
var valor = 100 // R$
var taxaDeJuros = 10 // %
var parcelas = 2

var valorPorParcela = valor * (taxaDeJuros/100) 
// 100 * (10/100) = 100 * 0.1 = R$10

var valorTotalAPagar = 
    valor = valor + valorPorParcela
    // valor = 100 + 10 // 1ra parcela 10 = R$110
    // valor = 110 + 11 // 2nda parcela 11 = R$121
```

> Percebeu que a cada parcela o valor base para o cálculo do juro aumenta? **Por isso juros compostos são agiotagem pura!!!**


Bom agora basta colcocarmos em forma de código reusando o código anterior:

```js
const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => valor * ( taxaDeJuros / 100 ) 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => {

  let total = valor
  let parcela = 0
  for (let i=parcelas; i>0; i--) {
    parcela = valorPorParcela(total, taxaDeJuros)
    total += parcela
  }
  return total
}

console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))
```

**Mas podemos refatora-la para isso:**

```js
const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => valor * ( taxaDeJuros / 100 ) 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => {
  for (; parcelas>0; parcelas--) 
    valor += valorPorParcela(valor, taxaDeJuros)
  return valor
}

console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))
```

Podemos ainda deixa-la recusiva:

```js
const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => valor * ( taxaDeJuros / 100 ) 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => 
  (!parcelas) 
    ? valor
    : valorTotalAPagar(valor += valorPorParcela(valor, taxaDeJuros), 
                        taxaDeJuros, 
                        --parcelas)


console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))
```

**E para apavorar mais um pouco podemos deixa-la menor que um *tweet* facinho:**

```js
const aPagar = (valor, juros, parcelas) => (!parcelas) ? valor : aPagar(valor += valor*(juros/100 ), juros, --parcelas)

```

## Correção Monetária