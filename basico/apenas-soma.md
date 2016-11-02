# Operações básicas apenas com soma

![WAT]()

> Sim isso é possível!

EM outro material eu já mostrei que podemos utilizar apenas soma e subtração, então agora irei mostrar como fazer subtração usando a soma!

Vamos revisar o que é a soma:

```
1+1=2
1+2=3
1+3=4
1+4=5
```

Basicamente seu algoritmo é:

- some o primeiro número ele com ele mesmo 
  - a quantidade de vezes referente ao outro número - 1


```
1+1=2 === 1+1
1+2=3 === 1+1+1
1+3=4 === 1+1+1+1
1+4=5 === 1+1+1+1+1
```

Tudo bem isso é fácil, agora como podemos fazer o seguinte apenas com soma?

```
5-4=1
4-3=1
3-2=1
2-1=1
```

> Vou dar uma dica: pode usar apenas soma e números **negativos**!

> Dica matadora essa né?

Você pode usar número negativo pois seu sinal é [representado por 64 bits, sendo apenas 1 para seu sinal](http://www.2ality.com/2012/04/number-encoding.html).

Então vamos pensar:

```js
5-4=1
5+4=9
5+(-4)=1 
```

É nessa hora que você lembra do Ensino Médio e a regra de sinais:

> número negativo com número negativo (1° caso)

> número positivo com número positivo (2° caso)

> número negativo com número positivo ou vice-versa (3° caso)


Primeiro caso:

> Quando temos dois números negativos repetimos o sinal de subtração e somamos esses dois números. 
> 
```
Exemplos:
-12 + -8 = - (12 + 8) = - 20
-10 + -16 = - (10 + 16) = - 26
-15 + -2 = - (15 + 2) = - 17
-11 + -46 = - (11 + 46) = - 57
```


Segundo caso:

> Quando temos dois números positivos repetimos o sinal de adição e somamos esses dois números. 

```
Exemplos:
+12 + 8 = + (12 + 8) = + 20
+10 + 16 = + (10 + 16) = + 26
+15 + 2 = + (15 + 2) = + 17
+11 + 46 = + (11 + 46) = + 57
```


Terceiro caso:

> Quando temos um número negativo e outro positivo ou vice-versa devemos repetir o sinal do maior número em módulo e depois devemos subtrair o maior número (em módulo) pelo menor número (também em módulo). 

> O módulo de um número nada mais é do que pegar o valor positivo desse número. O módulo é representado por duas barras dispostas uma no início e outra no fim do número. |-2| === 2

```
Exemplos:
+12 + -8 = + (|12| - |-8|) = - 20 
+10 + -16 = - (|-16| - |10|) = - 6
+15 + -2 = + (|15| - |-2|) = + 13
+11 + -46 = - (|-46| - |11|) = - 35
```

> A partir desse terceiro caso já matamos a charada!

## Exercício

Agora quero que você envie para esse repositório, pasta exercícios dentro da pasta basico, um arquivo nomeado `seu_github_user.md` com a resolução do nosso exercício:

> Crie um algoritmo para a subtração **e divisão** utilizando apenas a soma, lembrando que você **NÃO PODE USAR O OPERADOR `-`**. 


