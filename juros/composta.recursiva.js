const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = require('./valorPorParcela')()
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => 
  (!parcelas) 
    ? valor
    : valorTotalAPagar(valor += valorPorParcela(valor, taxaDeJuros), 
                        taxaDeJuros, 
                        --parcelas)


console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))