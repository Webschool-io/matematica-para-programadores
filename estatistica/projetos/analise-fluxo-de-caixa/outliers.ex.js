const algoritimo = require('./analise.js');

const rigidez = 3
const INFO_TREINO = [215.01, 210.39, 215.24, 242.49, 253.16]
const dados = [300.00, 360, 100, 250.00, 215, 203]
const resultado = algoritimo.analise(INFO_TREINO, dados, rigidez)
console.log('Analise', resultado)

