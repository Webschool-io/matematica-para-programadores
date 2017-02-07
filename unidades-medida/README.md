# Unidades de Medida

Um dos conteúdos mais básicos que encontramos nos nossos estudos é a conversão de unidades de medida.

Como um bom programador isso nunca deverá ser problema para nós pois é apenas uma regrinha de três.

![unidades de medida](http://i.imgur.com/0sZd2iX.png)
*fonte: [https://en.wikipedia.org/wiki/Gas_constant](https://en.wikipedia.org/wiki/Gas_constant)*

## Exercício

Dada a imagem acima correlacione a unidade `erg` com o `J`, então responda a pergunta:

> Precisamos de quantos Joules para ter a mesma quantidade de ` 200 erg`s?

**Nesse exercício você não precisa implementar a função, apenas demonstar seu cálculo.**

```
8.3144598(48)   J K−1 mol−1
8314.4598(48)   J K−1 kmol−1
8.3144598(48)×10^7   erg K−1 mol−1
```

## Conversor Universal


Estava eu bem de boas ajudando um aluno meu, do Ensino Médio, com conversão de unidades de temperatura aqui: [https://gist.github.com/gkal19/fe07921c562b85818d432d385a662f81](https://gist.github.com/gkal19/fe07921c562b85818d432d385a662f81).

Porém como ele não fez o que pedi ali no comentário eu mesmo fiz para demonstrar.

Primeiramente precisamos definir a estrutura de dados que teremos para consultar as conversōes de unidades, por exemplo:

```js

module.exports =  { 
  'c': {
    'name': 'Celsius',
    'f': (val) => (val * 1.8  + 32),
    'k': (val) => (val + 273.15)
  },
  'f': {
    'name': 'Fahreneit',
    'c': (val) => (val  - 32) / 1.8,
    'k': (val) => (val * 1.8) - 459.67
  },
  'K': {
    'name': 'Kelvin',
    'c': (val) => (val  - 273.15),
    'f': (val) => (val * 1.8) - 459.67
  }
}

```

Agora veja como ficou fácil criar um Conversor Universal para unidades de medidas:

```js

const unities = require('./unities.js')


const converter = (val, base, to) => unities[base][to](val)

console.log('converter 0c => K', converter(0, 'c', 'K'))
console.log('converter 20c => K', converter(20, 'c', 'K'))
console.log('converter 100c => K', converter(100, 'c', 'K'))


console.log('\n\n\nconverter 0c => f', converter(0, 'c', 'f'))
console.log('converter 20c => f', converter(20, 'c', 'f'))
console.log('converter 100c => f', converter(100, 'c', 'f'))


```

