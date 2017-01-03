
## Regra de 3

> **Ensinarei-te uma técnica que percebi que calcula automaticamente usando apenas proporções!**


Imagine um casal com 4 gatos, os quais comem 25mˆ3 de ração em 30 dias. Porém eles adotaram mais 1 gatinho que come o mesmo tanto que os outros! 

Vamos calcular quanto os 5 gatos irão comer em 5 dias.

```
4 gatos = 25mˆ3 = 30 dias

5 gatos =   x   = 5 dias
```

Uma dica que sempre dou é:

> Visulize o que o problema pede como resultado. `5 dias`

Entao em vez de começar calculando o quanto 5 gatos comem vamos começar pelo final, precisamos calcular qual a proporçao entre: 30 dias e 5 dias.

No caso é: `6` 

> Por que fizemos isso?
>
> -**Pense comigo!**

Se a proporcao é 6, vamos calcular a proporçao da comida:

```
25 / 6 = 4.16
```

Com isso sabemos que 4 gatos comem 4.16m^3 de ração em 5 dias e agora?? Precisamos calcular isso para 5 gatos, eu prefiro fazer assim:

> -**Calculo quanto 1 gato come e depois somo esse valor ao 4.16, veja comigo:**


```
4.16 / 4 = 1.04
4.16 + 1.04 = 5.20
```

Logo nosso resultado é: 

> Os 5 gatos comem 5.2mˆ3 em 5 dias.

Eu ainda nao ensinarei como resolver por Regra de 3 Composta pois eu acho essa forma muito mais simples, entao vamos criar uma fórmula para isso.

```js
const col1 = [4, 5]
const col2 = [25]
const col3 = [30, 5]

const colunas = [col1, col2, col3]

const calculaProporção = (valores) => 
valores.sort((a, b) => (a < b)).reduce((a, b) => parseFloat(a / b))

const res = colunas.reverse().reduce((a, b, i) => {
  switch (i) {
    case 0: a.push( calculaProporção(b).toFixed(2) )
      break
    case 1: a.push( calculaProporção([colunas[1][0], a[0]]).toFixed(2) )
      break
    case 2:  a.push( calculaProporção([colunas[2][0], a[1]]).toFixed(2) )
      break 
  }
  if (i === 2) return parseFloat(a[1]) + parseFloat(a[2])
  return a
}, [])
```



### Exercício

**Utilize o código anterior para agilizar sua vida.**

Imagine um casal com 4 gatos, os quais comem 5mˆ3 de ração a cada 60 dias. Porém eles adotaram mais 1 gatinho que come o mesmo tanto que os outros! Ao custo de R$30 por pacote de ração de 10Kg.

Calcular quanto os 5 gatos irão comer em 5 dias e qual o custo anual com rações.
