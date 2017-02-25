const desvio = require('../../src/desvioPadrao.js')
const media = require('../../src/media.js')
const map = require('lodash/fp/map')

const gauss = (media, desvio) => {
  const calc = (x) => {
    const maior = (x) => x == 0 ? media : media + (x * desvio)
    const menor = (x) => x == 0 ? media : media - (x * desvio)
    return {'maior': maior(x), 'menor': menor(x)}
    
    /*
    return { 
        'maior': (x) => x == 0 ? media : media + (x * desvio)
      , 'menor': (x) => x == 0 ? media : media - (x * desvio)
    } */
  }

  return map(calc, [0,1,2,3])
}

const aprenda = (dados) => {
  const m = media(dados)
  const d = desvio(dado, 'amostral')
  const g = gauss(media, desvio)

  const result = { media: m, desvio: d, gauss: g}
}

module.exports = {gauss, learn}
