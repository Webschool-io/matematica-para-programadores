# Matemática para programadores

Nesse curso vamos aprender um pouco mais sobre os fundamentos da matemática, iniciaremos pelas suas duas operações básicas:

- adição
- subtração.


E vou demonstrar como podemos compor essas duas para criarmos funções matemáticas mais complexas como:

- mulplicação;
- divisão;
- exponenciação;
- radiciação;
- logarítmo;
- etc.

Além da base matemática para isso também iremos aprender e praticar muito a composição, que é uma caraterística clássica do paradigma funcional, onde compomos uma função mais complexa com outras menores.

Vamos iniciar criando nossas duas primeiras funções básicas, que chamarei de *funções atômicas*, ok?

```js
function somar(x, y) {
  return x + y;
}

function subtrair(x, y) {
  return x - y;
}

```

Básico né?

```js
> somar(333, 333);
666
> subtrair(500, 80);
420
```

Beleza agora o próximo passo é criarmos as funções de: multiplicação e divisão.

O algoritmo para solucionarmos esse problema é o seguinte:

```suissagol
Recebo 2 parâmetros: 

- X
- Y

inicio o TOTAL da multiplicação com 0
inicio o CONTADOR da multiplicação com 0

enquanto X for maior que 0 faça
  TOTAL recebe o a soma de TOTAL e Y
  X recebe a subtração de X e 1

retorna o TOTAL
```

Bom a variáel `total` será o retorno da nossa função onde receberá a adição de um número X, por Y vezes, por exemplo: `multiplicar(2,3) == 6`. Bom então vamos criar nossa função em JavaScript:

```js
function multiplicar(x, y) {
  var total = 0;
  var contador = 0;
  while(x){
    total = somar(total, y)
    x = subtrair(x,1);
  }
  return total;
}
```

E para executarmos uma multiplicação precisamos fazer apenas o seguinte:

```js
 multiplicar(333,2)
666
```

Bem simples não? Agora vamos para a próxima função: divisão.

Como a divisão é um pouco mais complexa vamos quebrar ela em dois problemas:

- não existe divisão por 0;
- um número dividido por ele mesmo é 1.

O algoritmo para a solução desses problemas é o seguinte:

```suissagol
Recebo 2 parâmetros:

- X
- Y

inicio o TOTAL da multiplicação com X
inicio o CONTADOR da multiplicação com 1

se Y for diferente de 0 faça
  se X for igual a Y faça
    retorne 1;
retorne falso;
```

Convertendo esse algoritmo para JavaScript temos:

```js
function dividir(x, y) {
  var total = x;
  var contador = 1;

  if(y !== 0){ // não existe divisão por 0
    if(x === y) { // um número dividido por ele mesmo é 1
      return 1;
    }
  }
  return false;
}
```

Agora testamos ela assim:

```js
> dividir(10,10)
1
> dividir(10,0)
false
```

Bom e o que acontece se testarmos assim?

```js
> dividir(10,2)
false

```

Então precisamos resolver agora o caso geral e para resolvê-lo faremos o seguinte algoritmo:

```suissagol
Recebo 2 parâmetros:

- X
- Y

inicio o TOTAL da multiplicação com X
inicio o CONTADOR da multiplicação com 1

se Y for diferente de 0 faça
  se X for igual a Y faça
    retorne 1;
retorne falso;
```

E finalizando ele em JavaScript fica dessa forma:

```js
function dividir(x, y) {
  var total = x;
  var contador = 0;

  if(y !== 0){ // não existe divisão por 0
    if(x === y) { // um número dividido por ele mesmo é 1
      return 1;
    }
    while(total > 0) {
      total = total - y;
      contador = 1;
    }
    return contador;
  }
  return false;
}
```

E agora rodamos ela:

```js
> dividir(840,2)
420
```

### Exercício

**Refatore a divisão para utilizar as funções de somar subtrair, criadas anteriormente.**

Agora após finalizarmos essas operações básicas podemos agora resolver funções mais complexas como a `porcentagem`.

## Porcentagem

A porcentagem quer saber qual a parte de um total, por exemplo:

> 1% 777 é 7
> 
> 5% de 100 é 5
> 
> 10% de 700 é 70
> 
> 50% de 840 é 420
> 
> 100% de 666 é 666

Sabendo disso vamos criar o algoritmo para solucionar a porcentagem, vamos dividir ele em 2 problemas:

- 0% de X  = 0
- X% de X  = X

```suissagol
Recebo 2 parâmetros:

- X
- Y

inicio o TOTAL da multiplicação com X
inicio o CONTADOR da multiplicação com 1

se Y for diferente de 0 faça
  se X for igual a Y faça
    retorne 1;
retorne 0;
```

```js
function porcentagem(x, y) {
  if(y === 0) {
    return 0;
  }
  if(x === x) {
    return 1;
  }
  return false;
}
```

```js
> porcentagem(100,0)
0
> porcentagem(100,100)
1
```

Beleza resolvemos esses dois casos, agora vamos resolver o caso geral:


### Algoritmo mental do Suissa

Eu resolvo a porcentagem de uma forma um pouco diferente das ensinadas na escola, pois eu faço eu faço da seguinte forma:

> Quanto é 22% de 18600?

O ensinado normalmente é algo assim:

```math
18600 * 0.22 = 4092
```

Porém ninguém, normal, faz isso de cabeça, eu faço assim:

> Quando a porcentagem é menor que 10 eu divido por 1% e multiplico o valor pela poercentagem desejada. Por exemplo: 3% de 600 é 18.

Agora vamos ver o 3% de 18.600

```math
18600 * 0.01 = 186
186 * 3 = 558 // 3%
```

Agora quando a **porcentagem** é maior que 10% eu faço assim:

> Quando a porcentagem é maior que 10 eu divido por 10% e multiplico o valor pela porcentagem desejada.

```math
18600 * 0.10 = 1860
1860 * 2 = 3720
18600 * 0.01 = 186
186 * 2 = 372
3720 + 372 = 4092
```

Explicando o algoritmo:

1. Primeiramente multiplicamos o total por 10% (0.10) = 1860
2. Multiplicamos o seu valor por 2, para chegarmos no 20% (0.20) = 3720
2. Depois multiplicamos o total por 1% (0.01) = 186
3. Pegamos o resultado da unidade para multiplicar por 2, que é o 2% = 372
4. Para finalmente somar o 20% com o 2% = 4092

## Exponenciação

A **exponenciação** também conhecida por potência se dá por qual cálculo?

> A base é multiplicada por ela mesmo pelo mesmo número da potência.

Na **exponenciação** você tem:

- uma `base`;
- uma `potência`.

Exemplo, na programação utilizamos o `^` para referenciar a potência:

```math
3 ˆ2  = 9// 3 elevado ao quadrado é igual a 9
// 3 é a base
// 2 é a potência
3(1) * 3(2) = 9
```

Então você pega a `base` e multiplica por ela mesmo o número de vezes da `potência`, como já sabemos como a multiplicação funciona vamos converter a exponenciação em multiplicação:

```math
3 ˆ4 = 81
3 * 3 * 3 * 3 = 81
```

Então podemos resolver esse cálculo com o seguinte algoritmo:

```suissagol
Recebo 2 parâmetros:

- X
- Y

inicio o TOTAL da multiplicação com X
inicio o CONTADOR da multiplicação com 1

se Y for diferente de 0 faça
  se X for igual a Y faça
    retorne 1;
retorne falso;
```

Agora vamos transformar em JavaScript:

```js
function exponenciar(x, y) {
  var total = x;
  var contador = x;
  while(contador){
    total = multiplicar(total, x);
    contador = subtrair(contador,1);
  }
  return total;
}
```

## Radiciação

Depois da **exponenciação** estudaremos a **radiciação** que é a famosa `RAIZ`, a raíz é o inverso da potência. Então podemos pensar assim, se:

```math
3 ˆ4 = 81
3 * 3 * 3 * 3 = 81
```

Então o inverso dessa potência é:

```math
81 raiz 3 = 4
81 / 3 = 27
27 / 3 = 9
9 / 3 = 3
3 / 3 = 1
```

Nesse caso dividimos o `81` por `3` até o resultado ser `1`, nesse caso dividimos o `81` que é a base por `3` que o ?????? até não podermos mais dividí-lo, nesse caso o resultado é 4 pois foi o número de passos necessários até reduzirmos o `81` para `1`.
