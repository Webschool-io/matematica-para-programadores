const fixDecimal = (casas) => (numero) => Number(numero).toFixed(casas)
const isNumber = (x) => Number(x) === x

module.exports = ({fixDecimal, isNumber})
