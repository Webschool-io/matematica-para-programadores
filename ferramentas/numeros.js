const fixDecimal = (casas) => (numero) => Number(numero).toFixed(casas)
const isNumber = (x) => Number(x) === x

const precisao = (numero, p) => {
  let fator = Math.pow(10, p)
  return (Math.round(numero * fator)/fator)
}

module.exports = ({fixDecimal, isNumber, precisao})
