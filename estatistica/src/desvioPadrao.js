const estatistica = require('./variancia.js')

const desvio = (arr, tipo) => Math.sqrt(estatistica.variancia(arr, tipo))

module.exports = (arr, tipo) => desvio(arr, tipo)
