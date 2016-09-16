# Números Primos

## Algortimos

### by Suissa

Como eu curto pacas os números primos por serem *únicos* sempre me pego perguntando se tal número é ou não primo e como programador não poderia deixar de escrever um algortimo para isso, né?!

Antes de tudo vamos pensar um pouco.

Um algoritmo básico, sem pensar na performance, tem um custo básico de `O(n-2)`, por quê?

Vamos pensar que o `n` é o número a ser testado, logo eu não precisarei testar se ele é dividido por ele ou por 1, correto? 

> Porque qualquer número será divisível por ele mesmo e 1, **sempre**!

Logo só iremos testar se esse número tem algum divisor nessa faixa de números:  de `2` até `n-1`. Ou seja, só não testamos 2 números, por isso se o número for primo iremos testar, dividir, ele de `n-1` até o `2`, logo sua ordem de complexidade é: `n-2`.

Por exemplo se formos testar o `11`:

```
11/10
11/9
11/8
11/7
11/6
11/5
11/4
11/3
11/2
```

Como visto acima foi necessário 9 passos para validar se o número é primo ou não.

Porém esse algoritmo ainda é muito custoso, por isso devemos pensar em formas de diminuir a quantidade desses passos.

Primeira coisa que podemos fazer é testar **se o número é menor que 5 E diferente de 4**, pois se ele entrar nesse caso sabemos que é primo tendo em vista que o único não primo até 5 é o 4, logo poderemos retornar verdadeiro pois o número **com certeza** é primo.

Depois disso iremos testar se o número é ímpar, pois **só existem números primos ímpares!** Com exceção de apenas um número, o `2`.

E é exatamente por causa do 2 que não testei antes se são ímpares, pois se testasse, antes, o `2` nunca iria passar dessa validação. Por isso deixei essa validação depois.

> Bom até aí bem fácil né?

Além disso sabemos que se um número possui uma raíz quadrada inteira é porque ele tem um divisor maior que 1 e menor que ele, fica bem simples entender dessa forma:

```
√x = y
x/y = y
x = y*y
```

Ou seja, a raíz quadrada de x sendo y, logo se dividirmos `x` por `y` o resultado deve ser `y`.  

> Sabendo disso, ficou fácil entender o porquê eu uso esse teste?

Pense comigo: se acharmos sua raíz quadrada, inteira, saberemos que esse número **não é primo**, simples não?

```
√2 = 1.4142...
√3 = 1.7320...
√4 = 2
√5 = 2.2360...
√9 = 3
√49 = 7
```

Então nesse caso chegamos à um número ímpar, maior que 5, porém possui raíz inteira, logo não precisamos nem testar pois já sabemos **que não é primo!** Beleza?

Com isso já conseguimos eliminar todos os pares e os ímpares que possuem raíz quadrada inteira.

> E se o número passar por todos esses testes o que devemos fazer?




```
1. calcula a metade aproximada do número e guarda numa constante
2. testa se é inteiro e positivo
3. testa se é ímpar
4. testa se é maior que 5
5. testa se a metade do número é maior ou igual a 5, se o número maior que 10
    5.1. se o número menor que 10 testa se a metade é maior ou igual a 3
6. testa se posssui raíz quadrada inteira
7. testa divisão de x-(x/2) com todos números ímpares até o 5
```

Agora irei explicar o porquê de cada teste.

#### Passo 1

Iniciamos com:

> calcula a metade aproximada do número e guarda numa constante

Fazemos isso para diminuir a quantidade de passos a ser executada, pois se você for dividir um número `x` por `y` e quiser garantir qual o maior valor que é divisível por `x` basta dividi-lo por 2.

> Por quê?

Respondendo:

> Porque você achará o maior número por qual o `x` pode ser divisível.

Vamos entender isso com exemplos:

```
9/2 = 4.5 = 9/4.5 = 2
9/3 = 3
9/4 = 2.25
...
```

Ou seja, se você quiser achar o maior número, inteiro, divisível basta achar sua metade pois você nunca conseguirá dividir por menos que 2.


#### Passo 2

> testa se é inteiro e positivo

Bom nosso algoritmo foi feito apenas para números inteiros e positivos, ou seja, maior que 0 e sem casas decimais.


#### Passo 3

> testa se é ímpar

Esse é muito simples, é **porque não existe nenhum número par que seja primo!**


#### Passo 4

> testa se é menor ou que 5

Mais simples ainda, pense aqui comigo:

> Se um número for **menor ou igual a 5 e é ímpar**, ele pode ser quais números?

> Exatamente! Apenas 1, 2, 3 e 5, e esses números são o que?

> Isso mesmo! **PRIMOS!**

Logo não precisamos testar caso seja algum deles.

*ps: Só testamos que é maior que 5 pois antes já testamos se é ímpar*

#### Passo 4

> testa se a metade do número é maior ou igual a 5, se o número for maior que 10

Sabemos que não iremos testar caso o número seja menor que 5, porém agora estamos trabalhando com a *metade* do valor, então por que 5?

Vamos analisar alguns exemplos:

```
11/2 = 5.5
12/2 = 6
13/2 = 6.5
14/2 = 7
```



> se o número menor que 10 testa se a metade é maior ou igual a 3


```
5/2 = 2.5
6/2 = 3
7/2 = 3.5 ~= 3
8/2 = 4
```
