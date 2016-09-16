module.exports = (x) => {
  let divisors = []
  for (let i = x; i > 0; i--) {
    if (Number.isInteger(x/i)) divisors.push(i)
  }
  return divisors
}