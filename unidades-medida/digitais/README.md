# Unidades de Medida Digitais


## Decimal para Binário


Antes de explicar o algoritmo para isso gostaria que você lesse a função, em uma linha, que fiz para essa conversão e tente inferir a lógica a partir dela:


```js
const decToBin = (dec) => 
  [...Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse(), dec]
    .reduce((acc, cur, i, t) => (i == t.length-1) ? acc : acc += (t[t.length-1]/cur >= 1) 
      ? (t[t.length-1] = t[t.length-1]%cur) ? '1' : '1' : '0' , '')
```

> E assim facilita?

```js
const immutablePush = (arr, newEntry) => [ ...arr, newEntry ] 
const arrayBin = Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse()
// [ 128, 64, 32, 16, 8, 4, 2, 1 ]

const reduceDecToBin = (acc, cur, i, t) => 
  (i == t.length-1) 
    ? acc
    : acc += ((t[t.length-1]/cur >= 1)
        ? (t[t.length-1] = t[t.length-1]%cur)
          ? '1' : '1'
        : '0')

const decToBinReduce = (dec) => 
  immutablePush(arrayBin, dec).reduce(reduceDecToBin, '')

console.log('12: ', decToBinReduce(12))
console.log('35: ', decToBinReduce(35))
```

> **Meio estranha, não?** Vou facilitar um pouco.
> 
> Por que criar esse *Array*?

```js
const arrayBin = Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse()
// [ 128, 64, 32, 16, 8, 4, 2, 1 ]
```

Pois ele faz parte do método dessa solução, vamos pegar o valor 12 (00001100) :

```js
const arrayBin = Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse()
// [ 128, 64, 32, 16, 8, 4, 2, 1 ]
// 12 = [0, 0, 0, 0, 
//                  12/8 >= 1 ? 1 :0 
//                    1 ? 12 = 12%8 = 4
// 4 = [0, 0, 0, 0, 1, 
//                  4/4 >= 1 ? 1 :0 
//                    1 ? 4 = 4%4 = 0
// 0 = [0, 0, 0, 0, 1, 1, 0, 0]

        
```


## Exercício

Dada a imagem acima correlacione a unidade `erg` com o `J`, então responda a pergunta:

> Precisamos de quantos Joules para ter a mesma quantidade de ` 200 erg`s?

**Nesse exercício você não precisa implementar a função, apenas demonstar seu cálculo.**

```
8.3144598(48)   J K−1 mol−1
8314.4598(48)   J K−1 kmol−1
8.3144598(48)×10^7   erg K−1 mol−1
```
