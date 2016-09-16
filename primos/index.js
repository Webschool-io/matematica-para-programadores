const primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]

/**
1. testa se é inteiro e positivo
2. testa se é ímpar
3. testa se é maior que 4
4. acha a metade do numero
5. testa divisão de x-x/2 até o 5
*/

const isIntAndPositive = (x) => (x>0)
const isImpar = (x) => !!(x%2)
const isDivisor = (x, y) => !(x%y)
const isMaiorQueQuatro = (x) => (x>4)
const getHalf = (x) => parseInt(x/2)
const testNumbers = (x) => {

  if(!isIntAndPositive(x)) return false
  if(!isImpar(x)) return false
  if(!isMaiorQueQuatro(x)) return true
  const num = x-(getHalf(x))
  // console.log('num', num)
  const limit = 5
  for (let i = num, count=1; i>=limit; i-=2, count++) {
    // console.log('i', i)
    // console.log('count', count)
    if(isDivisor(x, i)) {
      console.log('é divisível por: ', i)
      return false
    }
  }

  return true
}

// console.log('vaii', testNumbers(19))
// console.log('996', testNumbers(996))
console.log('997', testNumbers(997)) //995 - 494 - 248

// console.log('par', testNumbers(18))

