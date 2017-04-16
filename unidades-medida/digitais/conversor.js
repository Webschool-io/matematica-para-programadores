const decToBin = require('./decToBin')

const decimal = {
  toBin: decToBin,
  toHex: '',
  toOct: '',
  toE: '',
}
const Conversor = {
  decimal
}


console.log(`Decimal 12 é ${Conversor.decimal.toBin(12)} em binário` )
console.log(`Decimal 35 é ${Conversor.decimal.toBin(35)} em binário` )
console.log(`Decimal 255 é ${Conversor.decimal.toBin(255)} em binário` )
// console.log(`35: `, ${Conversor.decimal.toBin(35)} )
// console.log(`255: `, ${Conversor.decimal.toBin(255)} )
// console.log('35: ', decToBinReduce(35))
// console.log('12: ', decToBinMap(12))