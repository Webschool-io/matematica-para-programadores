const arr = [2,5,3,2]
const produtoNotavel = require('./produtoNotavel')
const media = require('./media')
// console.log('media', media)
const raizQuadrada = (valor) => Math.sqrt(valor)

const desvioPadrao = (amostra) => {
  const m = media.calcular(amostra)
  const somatorio = (acc, cur) => {
    let produto = produtoNotavel.menos(acc, m)
    console.log('produto', produto)
    acc += produto
    return acc
  }
  const raizDentro = amostra.reduce(somatorio)
  const raizDividida = raizDentro / amostra.length
  return raizQuadrada(raizDividida)
}

console.log(desvioPadrao(arr))

// module.exports = (arr) => arr.reduce(media)