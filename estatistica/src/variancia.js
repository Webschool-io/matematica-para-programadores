#! /usr/bin/node
const m  = require('./media.js')
const somatorio = require('./somatorio.js')

const quadrado = (x) => x*x

const tamanho = (n, tipo = '') => {
  try {
    switch (tipo) {
      case 'amostra':
        return n -1
        break;
      case 'população':
        return n
        break;
      default:
        throw new Error('Tipos de variancia aceitos: amostra, população')
        break;
    }
  } catch(err) { console.log(err) }
}

const diferenca = (arr, media, result = []) => {
  if (arr.length === 0) {
    return result
  } else {
    result.push(arr.pop() - media)
    return diferenca(arr, media, result)
  }
}

const variancia = (lista, tipo) => {
  let n = tamanho(lista.length, tipo)
  let media = m(lista)
  let diferencaMedia = diferenca(lista, media)
  let diferencaMediaQuadrado = diferencaMedia.map(quadrado)
  let result = diferencaMediaQuadrado.reduce(somatorio)/n
  return result
}

let estatistica = {}
estatistica.variancia = variancia
estatistica.tamanho = tamanho
estatistica.diferenca = diferenca

module.exports = estatistica