# Conjuntos Numéricos

## Conjunto dos números naturais: ℕ

Os numeros naturais nasceram da necessidade de contar objetos. São numeros que não precisam ser representados de forma decimal ou fracional e não podem ser negativos.
Temos então:
`ℕ = { 0 , 1, 2, 3, 4, ..., n, ...}`
*em que n representa um elemento genérico do conjunto.*

O numeros naturais podem ser facilmente representados geometricamente por uma reta enumerada em que indicamos um ponto de origem(numero zero) e uma unidade de medida e uma orientação(para a direita, por exemplo)

ℕ = { 0 , 1, 2, 3, 4, ..., n, ...}

|--|--|--|--|--|---------->
0, 1, 2, 3, 4, 5, ..., n**

##### Os numeros naturais podem ter os seguintes subconjuntos:

**Conjunto dos numeros naturais não nulos:**
`ℕ* = { 0 , 1, 2, 3, 4, ..., n, ...} ou ℕ* = N - {0}`
**Conjunto dos numeros naturais pares:**
`ℕp = { 0 , 1, 2, 3, 4, ..., n, ...}, em que n ∈ ℕ`
**Conjunto dos numeros naturais primos:**
`P = { 0 , 1, 2, 3, 4, ..., n, ...}, em que n ∈ ℕ`

## Conjunto dos números inteiros: ℤ

Esse conjunto é formado por todos os elementos de ℕ e seus opostos, ao invés de ter um ponto de origem teremos os elementos negativos e positivos tendendo ao infinito.
Assim temos:

`ℤ = { ..., -4, -3, -2, 1, 0 , 1, 2, 3, 4, ...}`

E notamos, portanto, que ℕ é um subconjunto de ℤ.

![Image1](https://github.com/Webschool-io/matematica-para-programadores/blob/master/conjuntos-numericos/images/img1.png)

Temos subconjuntos notáveis também dentro do inteiros:
**Conjunto dos numeros inteiros não nulos:**
`ℤ = { ..., -4, -3, -2, 1 , 1, 2, 3, 4, ...} ou ℤ* = Z - {0}`
**Conjuto dos numeros interios não negativos:**
`ℤ+ = {0, 1, 2, 3, 4, ...}`
Sendo Z+ o proprio conjunto dos números naturais.
`ℤ+ = {0, 1, 2, 3, 4, ...} = ℕ`
**Conjunto dos numeros inteiros negativos não nulos.**
`ℤ+* = { ..., -4, -3, -2, 1 }`

### Modulo de um numero inteiro(abs)

Tendo o exemplo do numero 3 e seu oposto -3, observador que a distancia entre 3 e 0 é 3 unidades e distancia entre -3 e 0 também é 3 unidades. Portando dizemos que o módulo ou valor absoluto desse numero é 3 e o indicamos como:

 -3    0     3
--|----|-----|-

`|-3| = 3`

*No javascript:*
`Math.abs(-3) === 3 //true`

### Operações em ℤ

No conjunto dos numeros inteiros são definidas tres operações: a adição, a subtracação e a multiplicação pois (para qualquer) inteiro a e b, qualquer uma das tres operações sempre vão retornar numeros inteiros.
Para dividir numeros teremos de mudar nosso numero para os numeros racionais
Note que ao dividir 3/2 no javascript nosso numero passa a ter decimais mesmo sendo 3 e 2 numeros inteiros.

`3/2 //1.5`

Uma forma de manter a integridade da nossa categoria seria arredondar nosso numero para o inteiro mais proximo com Math.round()

`Math.round(3/2) // 2`

## Conjunto dos números racionais: ℚ

Defininos ℚ como o conjunto das frações p/q em que todos os numeros podem ser expressados como frações simples de dois inteiros.

**Exemplos:** 44, 0.121212..., - 18/5, Math.sqrt(36)

Ou seja :

`ℚ = {p/q | p ∈ Z, q ∈ Z e q !== 0}`

Quando temos q = 1, temos p/q = p/1=p ∈ Z. Isso mostra que todo numero inteiro é tambem um numero racional, ou seja ℤ é subconjunto de ℚ.

Numeros como 3/4 podem ter uma represetação decimal mais simples por ser um numero finito de algarismo e sendo assim são chamados de **decimais exatos**

`3/4 // 0,75`

Já divisões como 10/3 no entanto, o quociente da divisao apresenta uma repetição infinita de algarismos após a virgula. Esse tipo de quociente é chamado de dízima periódica.

`10/3 // 3.3333333333333335`
*Note que o javascript arredonda nosso numero infinito*

 3,333... sendo a sequencia que se repete(o algarismo 3) chamada de **periodo**.

**1,5 é racional pois pode ser escrito como 3/2.**
**7 é racional pois pode ser encrito como 7/1.**
**0,333... é racional pois é 1/3.**

ℚ também apresenta subconjuntos notáveis assim como o ℤ ou ℕ : ℚ*, ℚ+, ℚ-*..

ℚ são definidas tres operações: a adição, subtração e multiplicação.

## Conjunto dos numeros irracionais: []

Vimos que no conjunto dos racionais podemos ter numeros na forma de fração de na forma decimal, e os numeros decimais podem ser um **decimais exatos** ou uma **dizimas periodicas**.
Porém existem numeros como o PI(π) ou TAU(τ) cuja representação decimal é infinita.
Todas as raizes quadradas de numeros naturais que não são quadrados(√2 × √2) também são impossiveis.

```
//Pi
Math.PI // 3.141592653589793
//Raiz quadrada de 2
Math.sqrt(2) // 1.4142135623730951
//Numero de Euler
Math.e // 2.718281828459045
```

Notamos que não temos **dizimas periodicas** pois os infinitos algarismos á direita da virgula não se repetem periodicamente. Chamamos estes numeros de irracionais.
Diferente dos racionais eles não podem ser transformados em frações simples.

**Exemplo:**
**22/7 é proximo de PI porém não preciso o suficiente.**

```
22/7 // 3,1428571428571...
22/7 == Math.PI //false
```

**Portanto PI é irracional**

**Operações com PI também são numeros irracionais**

`Math.PI * Math.PI  //9.869604401089358`

## Conjunto dos numeros reais: ℝ

Esse conjunto é formado pelos numeros racionais e pelos numeros irracionais
Temos:

ℝ = ℚ ∪ []
ℚ ∩ [] = ∅

Então, se um numero real é racional, ele não é irracional e vice-versa.
Como ℕ ⊂ ℤ ⊂ ℚ. Em consequencia, ℕ, ℤ, ℚ, [] são subconjuntos de ℝ.

![Image3](https://github.com/Webschool-io/matematica-para-programadores/blob/master/conjuntos-numericos/images/img3.png)

Podemos representar subconjuntos nos numeros reais assim:
ℝ* = {x E ℝ | x != 0}
ℝ+ = {x E ℝ | x >= 0}
ℝ*- = {x E ℝ | x < 0}

# No Javascript

A maioria das linguagens de programação tem diversos tipos de numero
inteiros geralmente são representandos por "Int" e valores com decimais são "Double" podendo ter mais tipos com diferentes tamanhos(em bits).
Mas no Javascript há apenas um tipo chamado Number.

```
typeof 21;   // "number"
typeof 98.66666666; // "number"
typeof -2.1; // "number"
```

Todos os formatos de numeros são representados como "double-precision floating-point" que são guardados 64-bits, que é um tamanho que para outras linguagens pode ser considerado um "Double" mas numeros inteiros podem ser também representados como Ints de 32-bits.

```
0.1 * 1.9  // 0.19
-99 + 100; // 1
```

Apesar de uma precisão de 64-bits ser larga (numeros vão de 9,007,199,254,740,992 (–2^53) até 9,007,199,254,740,992 (2^53)) ainda assim os numeros binários tem dificuldade de fazer contas do tipo "Double" e consegue apenas aproximar resultados. 

```
0.1 + 0.2; // 0.30000000000000004
(0.1 + 0.2) + 0.3; // 0.6000000000000001
0.1 + (0.2 + 0.3); // 0.6
```

Essa serie de aproximações pode ser problematica e em sequencias muito grandes de contas é importante prestar atenção na precisão.

Por exemplo:
`Math.sqrt(2) * Math.sqrt(2) == 2 // False`

A raiz quadrada de 2 ao quadrado(√2 × √2) supostamente deveria ser um numero inteiro mas teve problemas de precisão.

`Math.sqrt(2) * Math.sqrt(2) //2.0000000000000004`

# Exercicios

**1- Escreva em javascript o sub-conjunto dos inteiros(Z) em que todos os valores são positivos menores de 100.**

**2- Escreva em javascript o sub-conjunto dos inteiros(Z) em que todos os valores são positivos, não nulos, multiplos de 3 e menores de 100.**

**3- Os seguintes numeros reais são numeros irracionais ou racionais?**
**a)√8/2**
**b)-4 * PI**
**c)5,0**
**d)0,325**
**e)7,77777**


### [Veja as Respostas aqui!](https://github.com/Webschool-io/matematica-para-programadores/blob/master/conjuntos-numericos/respostas.md)
