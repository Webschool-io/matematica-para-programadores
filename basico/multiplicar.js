const somar = require('./atoms/somar')
const subtrair = require('./atoms/subtrair')

module.exports = (x, y) => {
  let total = 0
  let contador = 0
  let c = 0
  if (x < 1 && x > 0) {
    c = x 
    x = y 
    y = c
  }
  // if (y < 1 && y > 0) {
  //   let tam = y.toString().split('.')[1].length
  //   let zeros = Array(tam).fill(0).join(''); 
  //   let decimal = "1"+zeros+"1"
  //   return 
  // }
  // console.log('MULTIII x', x)
  // console.log('MULTIII y', y)
  while(x){
    total = somar(total, y)
    x = subtrair(x,1)
  }
  // console.log('MULTIII x', x)
  // console.log('MULTIII total', total)
  return total.toFixed(5)
}