#! /usr/bin/node
const m = require('./media.js')

//const somatorio = (arr) => arr.reduce((a, b) => a + b)
const somatorio = (a, b) => a + b

const diferenca = (arr, media, result = []) => {
  if (arr.length === 0) { 
    return result
  } else {
    result.push(arr.pop() - media)
    return diferenca(arr, media, result)
  }
}

const variancia = (lista) => {
  let tamanho = lista.length
  let media = m.calcular(lista)
  let diferencaMedia = diferenca(lista, media)
  let result = diferencaMedia.reduce(somatorio)/tamanho - 1
  return result
}

module.exports = variancia
