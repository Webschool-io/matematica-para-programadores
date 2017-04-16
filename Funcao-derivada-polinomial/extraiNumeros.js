module.exports = (equacao) => {
  let calc = []
  equacao.forEach((num,i) => calc.push(num.split('x')))
  return calc 
}