'use strict'

const somar = require('./atoms/somar.js')
const subtrair = require('./atoms/subtrair.js') 

const inverteXeY = (x, y) => [y, x]

const multiplicar = require('./multiplicar.js')

const dividir = (x, y, decimal) => {
  let menor = false
  if(y === 1) {
    return x
  }
  if( x < y) {
    menor = true
    x = multiplicar(x,10)
  }
  var resto = x
  var resultado = decimal || 0
  if(y !== 0){ // não existe divisão por 0
    if(x === y) return 1
    while(resto > 1) {
      resto = subtrair(resto, y)
      resultado = somar(resultado, 1)
      if(resto === 0) {
        if(decimal || menor) return diminuiBase10(resultado) // se tem decimal
        else return resultado
      }
    // Caso sobre resto chamamos a função dividir novamente
    // passando o resto * 10 que ele será 
      if(resto < y && resto > 0) return dividir(resto*10, y, resultado*10)
    }
  }
  else return false;
}

const percent = (x, y) => {
  const f = (x, y) => dividir(x,y)
  const g = (x, y) => multiplicar(x, y)
  return dividir(g(x,(f(y, 10))),10)
}

// porcentagem(100, 25)
const porcentagem = (x, y) => {
  const ehDezena = (y >= 10)
  if(ehDezena) {
    // acho a dezena que é o INTEIRO de 25/10 = 2
    let dezena = parseInt(y/10)
    // acho a unidade q é 25-20 = 5
    let unidade = y - dezena*10
    // acho o 10% de x = 10
    let dezPorcento = x * 0.1
    // multiplico o 10% pela dezena que é 10 * 2
    let dezenaTotal = dezPorcento * dezena
    // acho o 1% de x 
    let umPorcento = x * 0.01
    // multiplico o 1% pela unidade que é 1 * 5
    let unidadeTotal = umPorcento * unidade
    // Depois apenas somamos os 2
    return dezenaTotal + unidadeTotal
  }
  else { 
    //mesma coisa aqui porém APENAS qnd é menor que 10%
    let unidade = y
    let umPorcento = x * 0.01
    let unidadeTotal = umPorcento * unidade
    return unidadeTotal
  }
}

console.log('10% de 150', porcentagem(177, 33))