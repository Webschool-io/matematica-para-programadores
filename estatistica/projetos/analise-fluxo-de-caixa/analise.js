const desvio = require('../../src/desvioPadrao.js')
const mediaCalc = require('../../src/media.js')

const INFO_TREINO = [7,8,9,3,4,5]
const parametros = {
  rigidez: Float, 
  info_treino: Array
}

// gauss :: Float -> Float -> Object
const gauss = (media, desvio) => {
  const calc = (x) => {
    const maior = (x) => x == 0 ? media : media + (x * desvio)
    const menor = (x) => x == 0 ? media : media - (x * desvio)
    return {'maior': maior(x), 'menor': menor(x)}
  }

  return [0,1,2,3].map(calc)
}

// aprender :: [Float] -> Object {Float, Float, Object}
const aprender = (dados) => {
  const m = mediaCalc(dados)
  const d = desvio(dados, 'amostra')
  const g = gauss(m, d)

  return { media: m, desvio: d, gauss: g}
}

// detectaAnomalia :: [Float] -> Int :: Float -> [ Object {Float, String} ] 
const detectaAnomalia = (treino, RIGIDEZ) => (dado) => {
  return dado >= treino.gauss[RIGIDEZ].maior 
    ? {'dado': dado, analise: 'Maior'}
    : dado <= treino.gauss[RIGIDEZ].menor
      ? {'dado': dado, analise: 'Menor'}
      : {'dado': dado, analise: 'Aceito'}
}

// analise :: [Float] -> [Float] -> [Float]
const analise = (treino, dados) => {
  const aprendido = aprender(treino)
  console.log('rigidez', RIGIDEZ)
  return dados.map(detectaAnomalia(aprendido, RIGIDEZ))
}

module.exports = {gauss, aprender, analise, INFO_TREINO, gauss, RIGIDEZ}
