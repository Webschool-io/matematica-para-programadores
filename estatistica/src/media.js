const arr = [2,3,3,2,67,59]

const media = (a,b,i,arr) => (i<arr.length-1) ? a+b : a/arr.length
const calcular = (arr) => arr.reduce(media)

module.exports = ({
  calcular
})