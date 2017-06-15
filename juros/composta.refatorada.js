const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = require('./valorPorParcela')() 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => {
  for (; parcelas>0; parcelas--) 
    valor += valorPorParcela(valor, taxaDeJuros)
  return valor
}

console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))