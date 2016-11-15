
const somar = require('./atoms/somar')
const subtrair = require('./atoms/subtrair')
const multiplicar = require('./multiplicar')
const mudaBase = (x, base) => multiplicar(x, base)
const aumentaBase10 = (x) => multiplicar(x, 10)
const diminuiBase10 = (x) => multiplicar(0.1, x)
// const testaDecimal = (x) => {
//   if (x === 1) return 0.1
//   let tam = x.toString().split('.')[0].length - 1
//   let zeros = Array(tam).fill(0).join(''); 
//   let decimal = "0."+zeros+"1"
//   return parseFloat(decimal)
// }
const testaDecimal = (x) => {
  // console.log('testaDecimal x', x)
  if (x === 1) return 0.1
  let tam = x.toString().split('.')[0].length
  // let zeros = Array(tam).fill(0).join(''); 
  // let decimal = "0."+zeros+"1"
  // console.log('Number(x)', Number(x))
  let decimal = Number(x+'e-'+tam)
  // console.log('decimal', decimal)
  return parseFloat(decimal)
}

const dividir = (x, y, decimal=0) => {
  let menor = false
  if(y === 1) {
    return x
  }
  if( x < y) {
    menor = true
    x = multiplicar(x,10)
  }
  var resto = x
  var passos = decimal 
  if(y){ // y !== 0 // não existe divisão por 0
    if(x === y) return 1 // numero dividido por ele mesmo = 1
    while(resto > 1) {
      resto = subtrair(resto, y)
      passos = somar(passos, 1)
      if(!resto) { // === 0
        if(decimal || menor) {
          // console.log('passos if', passos)
          // console.log('decimal', decimal)
          let resultado = testaDecimal(passos)
          // console.log('resultado', resultado)
          return resultado
          // return mudaBase(passos, casas)
        }
        else return passos
      }
      if(resto < y && resto) 
        return dividir(resto*10, y, multiplicar(passos,10))
    }
  }
  else return false
}

console.log('4/2:', dividir(4, 2))
console.log('16/2:', dividir(16, 2))
console.log('1/2:', dividir(1, 2))
console.log('1/4:', dividir(1, 4))
console.log('1/8:', dividir(1, 8))

