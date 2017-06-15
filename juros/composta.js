const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => valor * ( taxaDeJuros / 100 ) 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => {

  let total = valor
  let parcela = 0
  for (let i=parcelas; i>0; i--) {
    parcela = valorPorParcela(total, taxaDeJuros)
    total += parcela
  }
  return total
}

console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))