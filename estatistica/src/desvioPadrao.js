const arr = [2,5,3,2]
const variancia = require('./variancia')

const desvio = (arr) => Math.sqrt(variancia(arr))

console.log('desvio padrão: ', desvio(arr))

module.exports = (arr) => desvio(arr)