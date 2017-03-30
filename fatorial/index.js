const num = 5

const simples = require('./fatorial.js')()
const fatorial = require('./fatorial.better.js')()
const recursiva = require('./fatorial.recursiva.js')()

console.log('Fatorial simples de '+num+' é '+simples(num))
console.log('Fatorial comum de '+num+' é '+fatorial(num))
console.log('Fatorial recursivo de '+num+' é ', recursiva(num))