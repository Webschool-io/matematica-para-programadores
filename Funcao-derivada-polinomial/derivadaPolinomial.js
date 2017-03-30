
module.exports = (equacao) => {

  const extraiNumeros = require('./extraiNumeros')
  const calcula = (nums) => [nums[0]*nums[1], nums[1]-1]

  const derive = (equacao) => {
    let calc = []

    if(equacao[0][1]===1) return  equacao 

    equacao.forEach((num,i) => { 
      if(i===1 && num[1]===0) return calc.push(num)
      else calc.push(calcula(num))   
      if(calc[0][1] > 1) return derive(calc)
    })
    return calc
  }

  const derivadaPolinomial = (equacao) => {
    let calculo = derive(extraiNumeros(equacao))
    return calculo[0][0] + 'x + ' + calculo[1][0]
  }
  return derivadaPolinomial(equacao)
}