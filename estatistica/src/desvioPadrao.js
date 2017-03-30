const arr1 = [5,3,7]
const arr2 = [5,5,3,3,7]
const variancia = require('./variancia')

const desvio = (arr, tipo) => Math.sqrt(variancia(arr, tipo))

console.log('desvio padrão sob amostra: ', desvio(arr1, 'amostra'))
console.log('desvio padrão sob população: ', desvio(arr2, 'população'))

module.exports = (arr, tipo) => desvio(arr, tipo)