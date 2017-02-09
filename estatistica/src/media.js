const somatorio = require('./somatorio.js')
const numeros = require('../../ferramentas/numeros.js')
const cincoCasas = numeros.fixDecimal(5)

// media = Soma de itens/numero de itens
const numeroDeItens = (arr) => arr.length
const media = (arr) => cincoCasas(arr.reduce(somatorio)/ numeroDeItens(arr))

module.exports = media
