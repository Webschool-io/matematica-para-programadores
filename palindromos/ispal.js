const isPal = (num) => {
  let arr = num.toString().split('')
  let inverse = arr.reverse().join('')
  return num.toString() === inverse.toString()
}

const makePal = (num) => Number.parseInt(num.toString().split('').reverse().join(''))

let counter = 0
const testIsPal = (num) => {
  counter++
  if (num > 9007199254740990)
    return false
  let sum = num + makePal(num)
  console.log(num + '+' + makePal(num) + ' = ' +sum)
  console.log(isPal(sum))
  if (isPal(sum)){
    console.log('Num de passos: '+counter)
    return sum
  }
  else
    return testIsPal(sum)
}

// console.log('64', testIsPal(64))
console.log('10911', testIsPal(10911))