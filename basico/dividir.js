
const somar = (x,y) =>  x + y 
const subtrair = (x,y) =>  x - y 
const f = (x) => subtrair(aumentaBase10(x), x)
const aumentaBase10 = (x) => multiplicar(x, 10)
const diminuiBase10 = (x) => multiplicar(0.1, subtrair(aumentaBase10(x), (f(x))))


const multiplicarDecimal = (x, y=1) => {
  var total = 0;
  var contador = 0;
  while(x){
    total = somar(total, y)
    x = subtrair(x,1);
  }
  return total;
}


const multiplicar = (x, y) => {
  var total = 0;
  var contador = 0;
  let c = 0
  if(x < 1) {
    c = x 
    x = y 
    y = c
  }
  while(x){
    total = somar(total, y)
    x = subtrair(x,1);
  }
  return total.toFixed(2);
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

console.log('resultado:', dividir(1, 5))

// console.log('resultado:', multiplicar(0.2, 8))
// console.log('resultado:', dividir(2, 1))
