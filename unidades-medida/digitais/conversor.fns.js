
const immutablePush = (arr, newEntry) => [ ...arr, newEntry ] 
const arrayBin = Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse()
// [ 128, 64, 32, 16, 8, 4, 2, 1 ]

const decToBin = (dec) => 
  [...Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse(), dec]
    .reduce((acc, cur, i, t) => (i == t.length-1) ? acc : acc += (t[t.length-1]/cur >= 1) 
      ? (t[t.length-1] = t[t.length-1]%cur) ? '1' : '1' : '0' , '')

/*
const decToBin = (dec) => 
  [...Array.from({length: 8}, (k, i) => Math.pow(2, i) ).reverse(), dec].reduce((acc, cur, i, t) => (i == t.length-1) 
? acc : acc += (t[t.length-1]/cur >= 1) ? (t[t.length-1] = t[t.length-1]%cur) ? '1' : '1' : '0' , '')
*/

const reduceDecToBin = (acc, cur, i, t) => 
  (i == t.length-1) 
    ? acc
    : acc += ((t[t.length-1]/cur >= 1)
        ? (t[t.length-1] = t[t.length-1]%cur)
          ? '1' : '1'
        : '0')


const mapDecToBin = (el, i, t) => {
  let dec = t[t.length-1]
  if (dec/cur >= 1) {
    acc += '1'
    t[t.length-1] = dec%cur
  }
  else acc += '0'
  return acc
}

const recursiveDecToBin = (arrayBin, pos=0, val, dec, bin = '') => {
  if (!val) return bin 
  if (dec / val >= 1)
    return recursiveDecToBin(arrayBin, ++pos, arrayBin[pos], dec, bin += '1')
  else return recursiveDecToBin(arrayBin, ++pos, arrayBin[pos], dec, bin += '0')
}

const decToBinReduce = (dec) => 
  immutablePush(arrayBin, dec).reduce(reduceDecToBin, '')

const decToBinMap = (dec) => {
  const arr = immutablePush(arrayBin, dec)
  const pos = 0
  return recursiveDecToBin(arr, pos, arr[pos], dec)
}

console.log('12: ', decToBin(12))
console.log('35: ', decToBinReduce(35))
// console.log('12: ', decToBinMap(12))