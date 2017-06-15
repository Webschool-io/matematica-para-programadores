const somatorio = require('./somatorio.js')

// media = Soma de itens/numero de itens
const numeroDeItens = (arr) => arr.length
const media = (arr = []) => arr.reduce(somatorio)/numeroDeItens(arr)
module.exports = media
