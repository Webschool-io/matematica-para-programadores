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

  if(y === 0){ // não existe divisão por 0 portanto se for igual o retorno é falso
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

A **exponenciação** também conhecida por potência, dá-se por qual cálculo?

> A base é multiplicada por ela mesmo pelo mesmo número da potência.

Na **exponenciação** você tem:

- uma `base`;
- uma `potência`.

Exemplo, na programação utilizamos o `^` para referenciar a potência:

```math
2 ˆ 3  = 8 // 2 elevado ao cubo é igual a 8
// 2 é a base
// 3 é a potência
2[1] * 2[2] * 2[3] = 8
// o 2 é multiplicado por ele mesmo 3(base) vezes
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

## Radiciação 

> Uma raiz quadrada de um número x é um número que, quando multiplicado por si próprio, iguala x.[1] Por exemplo, 4 e -4 são raízes quadradas de 16, pois 4^2 = (-4)^2 = 16.

fonte: [https://pt.wikipedia.org/wiki/Raiz_quadrada](https://pt.wikipedia.org/wiki/Raiz_quadrada)

```
√¯16 = 4
```

Na raíz quadrada o índice do radical é `2`, logo basta elevar o resultado pelo índice para achar o radicando, `16`.

Logo a operação inversa se dá pela exponenciação, elevando o resultado na potência 2:

```
4 ^ 2 = 16
```

Você sempre irá elevar o resultado pelo radical, por exemplo na raíz cúbica:

```
3√¯729 = 9
```

Invertendo sua lógica:

```
9 ^ 3 = 729
```

Mas e caso você deseje descobrir o resultado de uma raíz quadrada?

```
√¯49 = x
```

Nesse caso você precisa achar o `x` que é um número que elevado ao quadrado, resultando no `49`, para resolver essa conta vamos inverter a raíz.

A operação inversa da raíz é exponenciação e ela dá-se pela seguinte fórmula:

```
indice√¯y = x
y = x ^ indice
```

No caso da raíz quadrada o índice é `2`:

```
49 = x ^ 2
49 = x . x
49/x = x
```

Assim chegamos a conclusão que o radicando dividido pelo resultado `x` dará `x`. Com isso podemos deduzir uma fórmula de resolução de raíz quadrada:

> √¯y = x
> 
> y/x = x


Dessa forma fica simples para você testar os números até encontrar seu resultado, sabendo que o radicando é um número ímpar podemos deduzir que seu resultado deverá ser maior que 2.

> Pois qualquer número ímpar dividido por um número par sempre terá resto.

E como estamos procurando um valor que multiplicado por ele mesmo dará `49`, deduzimos que o `x` **PRECISA** ser um divisor de 49. Nesse caso 

```
49/x = x
49/2 = 24,5
49/3 = 16,3...
49/4 = 12,25
49/5 = 9,8
49/6 = 8,166...
49/7 = 7
```

Obviamente você não irá testar todos esses valores, para isso vamos criar o nosso algoritmo:

```suissagol
z√¯y = x

Recebo 2 parâmetros:

- indice (da raíz)
- radicando

radicando / indice = indice
contador = 1

faça de 1 até radicando incrementando o contador em 1
  se (radicando / contador == contador)
    retorne contador
```


Agora vamos fazer o teste de mesa:

```js
function raiz(indice, radicando) {
  for(var contador = indice; contador < radicando; contador++) {
    if( (radicando / contador) == contador)
      return contador;
  }
}
```

Agora vamos executar nossa função para testarmos sua validade:

```
raiz(2, 4)
2
raiz(2, 9)
3
raiz(2, 81)
9
```

Pronto criamos um algoritmo nosso para resolver a raíz de uma forma simples

## Precedência

Na matemática, assim como na programação, podemos mudar a ordem dos cálculos de uma função utilizando os parentêses para encapsular...

**[CONTINUAR]**

## Progressão Aritmética

Definição: P.A são sequências de números, em que a diferença entre um número e seu antecedente é igual à uma razão `r`. Elas podem ser crescentes ou decrescentes. Nas progressões crescentes, a razão será positiva, e nas decrescentes, será negativa.

O valor da razão `r` é calculado da seguinte forma:

r = a2 – a1 ou r = a3 – a2 ou r = a4 – a3 ou r = a5 – a4 ou r = a6 – a5, e assim por diante.

Sempre o elementos subtraído de seu antecessor.

Nos exercícios de progressões aritméticas (P.A.), devemos ter em mente duas fórmulas:

a) N-ésimo termo de uma P.A.:

A fórmula abaixo é usada quando se quer determinar o n-ésimo termo de uma progressão aritmética.

an = a1 + (n – 1) . r

Onde,

an = n-ésimo termo a ser achado.

a1 = primeiro termo da sequência.

n = número de termos da sequência.

r = razão da sequência, encontrado pela diferença de um termo e seu antecessor.

Vamos desenvolver um algoritmo para resolver a PA:

```
a1 = 2;
r = 3;
n = 10;

// Nossa PA começará com o número 2
// Com uma razão igual a 3
// Possuindo 10 termos na sequência


an = a1 + (n – 1) . r
an = a1 + (9) . r

// Aqui resolvemos a conta entre ( ) pois tem maior precedência
// Logo sabemos que o resultado dessa conta sempre será o total - 1

an = a1 + (9) . 3
an = a1 + 27
an = 2 + 27
an = 29
```

Nesse caso o décimo elemento dessa sequência é `29`, pois:

```
[2, 5, 8, 11, 14, 17, 20, 23, 26, 29]
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

E se quisermos saber o terceiro número dessa sequência?

```
a1 = 2;
r = 3;
n = 3;

a3 = a1 + (3 – 1) . r
a3 = a1 + (2) . 3
a3 = 2 + 6
a3 = 8
```

Mas claro que com a fórmula é fácil né?

Agora vamos criar um algoritmo para solucionar essa fórmula.

```
Recebo 3 parâmetros:

- a1 (primeiro elemento)
- r (razão)
- n (qual elemento a ser achado)

// Inicialmente resolvemos o (n – 1) e armazenamos em uma variável
var busca = (n – 1)

// Logo após calculamos o busca . r
var busca_razao = busca * r

// Agora ta suave hein!
var elemento = a1 + busca_razao
```

Pronto!

Claro que vamos criar o código em JavaScript para validar nosso algoritmo.

```js
function PA(a1, r, n) {
  var busca = (n – 1);
  var busca_razao = busca * r;
  var elemento = a1 + busca_razao;
  return elemento;
}
```

Como podemos perceber o elemento a ser achado é a soma do primeiro elemento com a *busca* multiplicada pela razão.

Você deve se perguntar: mas e essa `busca = (n – 1)`?

Vamos analisar essa `busca` sem a subtração:

```
a1 = 2;
r = 3;
n = 3;

a3 = a1 + (3) . r
a3 = a1 + (3) . 3
a3 = 2 + 9
a3 = 11
```

Se analisarmos nossa sequência anterior podemos ver que o número `11` é nosso quarto elemento.

Mas então o porquê temos que subtrair o `n`?

Perceba como é a fórmula da PA:

```
an = a1 + (n – 1) . r
```

Percebeu que tem o `a1` ali?

Então na fórmula da PA ela já possui o **PRIMEIRO ELEMENTO** (a1), por isso precisamos subtrair o `n` em 1, para que o mesmo tenha o valor correto.


## Progressão Geométrica

A P.G. é quase a mesma coisa da P.A. com a diferença que agora a razão (q) é elevada ao número do elemento

```
an = a1 . q  ^ (n – 1)
```

## Logarítmo

## Produto notável

## Polinômio de Newton

## Fórmula de Bhaskara

A fórmula de Bhaskara é principalmente usada para resolver equações quadráticas de fórmula geral ax2+bx+c=0, com coeficientes reais, com a≠0 e é dada por:

![](http://www.infoescola.com/wp-content/plugins/latex/cache/tex_a5abb2d99b070c17a06232ee036054da.gif)

chamamos de discriminante: Δ = b2-4ac

Dependendo do sinal de Δ, temos:

Δ=0, então a equação tem duas raízes iguais.
Δ>0, então a equação tem duas raízes diferentes.
Δ<0, então a equação não tem raízes reais.

A ideia da demonstração da fórmula de Bhaskara é o completamento de quadrados. Seja:

ax2+bx+c=0
a2x2+abx+ac=0
4a2x2+4abx+4ac=0
4a2x2+4abx+b2+4ac=b2
(2ax)2+2(2ax)b+b2=b2-4ac
(2ax+b)2=b2-4ac

![](http://www.infoescola.com/wp-content/plugins/latex/cache/tex_af22fa62dac786165524367882b0e80d.gif)