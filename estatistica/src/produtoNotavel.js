const exp = 2
const mais = (a,b) => Math.pow(a,exp) + exp*a*b + Math.pow(b,exp)
const menos = (a,b) => Math.pow(a,exp) - exp*a*b + Math.pow(b,exp)
console.log(mais(5,2))
console.log(menos(5,2))
module.exports = ({
  mais,
  menos
})