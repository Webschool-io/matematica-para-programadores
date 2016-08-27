const regraPorcentagem = (total, parcial) => regraDeTresNaDireita(total, 100, parcial)

const regraDeTresNaDireita = (total, totalDireta, parcial) => (parcial*totalDireta)/total
const regraDeTresNaEsquerda = (total, totalDireta, parcial) => (parcial*total)/totalDireta

console.log(regraPorcentagem(853, 80))
console.log(regraDeTresNaEsquerda(1, 2, 8))

const valuesR = {
  firstLine: [1, 2],
  secondLine: ['x', 8]
}

const valuesL = {
  firstLine: [1, 2],
  secondLine: [8, 'x']
}

const r = (v) => {
  if(v.secondLine[0] === 'x') return (v.secondLine[1]*v.firstLine[0])/v.firstLine[1]
  else return (v.secondLine[0]*v.firstLine[1])/v.firstLine[0]
  // return v
}

console.log('r:', r(valuesR))
console.log('r:', r(valuesL))