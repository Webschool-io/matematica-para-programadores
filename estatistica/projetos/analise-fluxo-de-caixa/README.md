# Projeto: Análise de fluxo de caixa

## Introdução

A detecção de outliers é uma das questões básicas da estatística. Um *outlier* é definido como:

>"An outlying observation, or "outlier," is one that appears to deviate markedly from other members of the sample in which it occurs." 
[1]:http://www.tandfonline.com/doi/abs/10.1080/00401706.1969.10490657

Traduzindo: "Uma observação distante, ou *outlier*, é uma que desvia-se marcadamente de outros membos da amostra da qual ocorre."

<p align="center">
  <img src="./../../material/imgs/outlier-fig-1.png" alt="Figura 1">
  </p>
<p>
  <i>Figura 1: Um possível outlier na amostra de dados bivariados. A presença deste ponto tem uma forte influência no valor da correlação entre *X* e *Y*, reduzindo de 0.97 para 0.86.</i>
</p>

Isso significa que um *outlier* pode indicar que algo está de errado com aquele ponto o

Um *outlier* pode ser apenas uma manifestação extrama da variação dos dados, o que faria com que ele tivesse de ser adicionado aos cálculos. Por outro lado, pode indicar que há algo de errado com aquela informação, podendo ser erros de cálculo, erros na entrada de informação ou até mesmo um defeito.

## Hipótese

O projeto consiste na construção de um algoritimo capaz de identificar anomalias no fluxo de caixa. Isso significa que ele poderá:

* Identificar gastos acima ou abaixo esperado (o que pode indicar que alguma coisa está errada).
* Indentificar contas não pagas em um determinado período.
* Indentificar corupção nos gastos públicos.

Utilizaremos a estatística para tal tarefa.

### Exemplo de uso:

1) Um belo dia o gestor de um pequeno negócio, esqueceu de pagar a conta de luz do mês de janeiro. No mês de fevereiro ele efetuou o pagamento das suas respectivas contas, sem notar que houve um erro no mês de janeiro, o que acarretou um corte no fornecimento da energia elétrica no mês de abril. Tal problema poderia ser evitado caso este algoritimo estivesse em funcionamento, afinal ele iria dizer que algo de errado ocorreu com a conta da energia no mês de janeiro!

2) Com uma ferramenta de monitoramento dos gastos públicos, pode-se identificar compras possivelmente superfaturadas utilizando a idéia básica deste algoritimo.

## Teoria

O primeiro passo é entender os dados. Iremos trabalhar com dados reais da conta de telefone e internet de um estabelecimento comercial aqui denominado *Loja 95*. Sendo a nossa amostra:

<p align="center">
  <img src="./../../material/imgs/dados-loja-1.png" alt="Figura 1">
  </p>

Um outlier pode ser indentificado através da determinação de um critério, o qual deve-se ser comparado para determinar se este é um outlier ou não. 

A distribuição normal ou distribuição gaussiana é a distribuição dos dados de acordo cum a frequêcia, ela sempre toma a forma de sino. Onde  µ = Média Aritimética,  σ = Desvio padrão. Quando mais afastado da Média, maior a menor é a probabilidade de um determinado dado acontecer.
 
<p align="center"><img src="http://www.portalaction.com.br/sites/default/files/EstatisticaBasica/figuras/distribuicaoNormal/normal3.PNG"></p>

Baseando-se na distribuição dos dados, podemos concluir que um dado futuro 4 vezes maior que o devio padrão - a média, definido por { -4σ - µ, 4σ - µ } , tem a probabilidade de 0,003% de acontecer, o que **pode** indicar alguma anomalia, sendo necessário uma revisão deste dado.

## Desenvolvimento

Nosso algoritimo tem de aprender o padrão dos dados, depois comparalos com os dados atuais (e os futuros), caso seja um outlier ele avisará ao operador que foi encontrado uma anomalia e será **ignorado** em cálculos futuros. Este operador avaliará se realmente é uma anomalia ou se é "apenas uma manifestação extrama da variação dos dados", o qual deverá ser adicionado ao aprendizado do algorítimo. Focaremos na detecção da anomalia.

A primeira função deve ser a de aprendizado, esta função deve retornar informações básicas do nosso dados, como a Média, o Desvio padrão e a Curva de Gauss (Distribuição normal).

```js
const lista = []
const somatorio = (list, sum) => somatorio(list, )
```
