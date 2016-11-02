# Fatorial

> Na matemática, o fatorial (AO 1945: factorial) de um número natural n, representado por n!, é o produto de todos os inteiros positivos menores ou iguais a n. A notação n! foi introduzida por Christian Kramp em 1808.

*fonte: [https://pt.wikipedia.org/wiki/Fatorial](https://pt.wikipedia.org/wiki/Fatorial)*

Ou seja, basta pegar o número e ir multiplicando ele pelo seus antecessores.

```
n   n!
0   1
1   1
2   2
3   6
4   24
5   120
```

Então o algoritmo para isso é fácil né?!

```
total = 1
enquanto X for maior que 0 faça
  multiplique X por X-1
  some esse resultado com total
  subtraia 1 de X
```

Convertendo isso em JavaScript fica:

```js
let total = x
while(x > 1) {
  total = total * (x - 1)
  x = x - 1
}
return total
```

Agora adicionamos a regra se o número for 0, pois aí seu fatorial é 1 e também vamos colocar em função:

```js
const fat = (x) => {
  if(!x) return 1

  let total = x

  while(x > 1) {
    total = total * (x - 1)
    x = x - 1
  }
  return total
}
```

Percebeu que meu teste se for 0 é assim: `if(!x) return 1`?

> Sabe por quê?

No JavaScript o valor `0` significa `false` e qualquer outro número será `true`, **mesmo os negativos!**

Então nesse caso, eu sabendo que quero pegar o valor 0 e entrar no `if`, bastou eu negar o `0/false` para ele virar `true` e retornar `1`. 

Porém podemos fazer uma lógica invertida e muito mais fácil, se invertemos o valor de `total`, iniciando em `1`, pois se for `0` não pode multiplicar direto. 

Como inciamos o total com `1` basta multiplicar ele pelo `x` e depois subtrair 1 do `x`, por exemplo:

```
total=1
x=5 total=5 
x=4 total=20
x=3 total=60
x=2 total=120
x=1 total=120
```

Logo nosso código ficará assim:

```js
const fat = (x) => {
  if(!x) return 1

  let total = 1

  while(x) {
    total *= x
    x -= 1
  }
  return total
}
```

## Recursividade

Agora entraremos em um assunto deveras importante para você! A famigerada recursividade.

> Recursividade é um termo usado de maneira mais geral para descrever o processo de repetição de um objeto de um jeito similar ao que já fora mostrado. Um bom exemplo disso são as imagens repetidas que aparecem quando dois espelhos são apontados um para o outro.

*fonte: [https://pt.wikipedia.org/wiki/Recursividade](https://pt.wikipedia.org/wiki/Recursividade)*
Lembro-me muito bem que na época da faculdade isso era bem estranho para mim e confesso que só após muito tempo de programação essa técnica se tornou mais clara e simples.

Utilizamos uma função recursiva quando queremos fazer o mesmo processamento até atingirmos o valor necessário.

> Sabendo disso por que você acha que usaremos a recursividade para resolver o fatorial?

> Simples né? Porque ela faz sempre o mesmo cálculo, multiplicação, até sair da função. Porém como fazer?

**Para que uma função seja recursiva ela precisa chamar ela mesma!**

![CRAZYYYY](http://www.mememaker.net/static/images/memes/4483542.jpg)

Primeira coisa que precisamos pensar é na condição de parada dessa função, se não ela vai cair em loop infinito e depois fazemos a chamada da mesma passando um parâmetro diferente do original, é lógico.

Agora olhe q loucura que fica nossa função:

```js
const fat = (x) => {
  if(!x) return 1

  return x*fat(x-1)
}
```

Toda a mágica está aqui `return x*fat(x-1)` pois chamamos a mesma função passando `x-1` como parâmetro, para que o resultado não seja igual sempre.

Ainda podemos refatorar essa função diminuindo-a, para deixar em uma linha, utilizando um if ternário:

```js
const fat = (x) => (!x) ? 1 : x*fat(x-1)
```

Ou mais *"legível"* pra galera do Funcional:

```js
const fat = (x) => (!x) 
                      ? 1 
                      : x*fat(x-1)
```


## Exemplo

```js
const num = 5

const simples = require('./fatorial.js')()
const recursiva = require('./fatorial.recursiva.js')()

console.log('Fatorial simples de '+num+' é '+simples(num))
console.log('Fatorial recursiva de '+num+' é ', recursiva(num))
```