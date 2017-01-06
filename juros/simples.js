const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => {
  console.log('\nvalorPorParcela')
  console.log('valor: ', valor)
  console.log('taxaDeJuros: ', valor * ( taxaDeJuros / 100 ))
  console.log('valorPorParcela: ', valor * ( taxaDeJuros / 100 ))
  return valor * ( taxaDeJuros / 100 )
} 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => {
  console.log('\nvalorTotalAPagar')
  console.log('valor: ', valor)
  console.log('taxaDeJuros: ', taxaDeJuros)
  console.log('parcelas: ', parcelas)
  return ( valor ) + ( parcelas * valorPorParcela(valor, taxaDeJuros) )
}

console.log('\n\n\nvalorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))

/*
const valor = 100 // R$
const taxaDeJuros = 10 // %
const parcelas = 2

const valorPorParcela = (valor, taxaDeJuros) => valor * ( taxaDeJuros / 100 ) 
const valorTotalAPagar = (valor, taxaDeJuros, parcelas) => 
  ( valor ) + ( parcelas * valorPorParcela(valor, taxaDeJuros) )

console.log('valorTotalAPagar', valorTotalAPagar(valor, taxaDeJuros, parcelas))
*/