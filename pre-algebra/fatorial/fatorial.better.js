
module.exports = () => {

  const fat = (x) => {
    if(!x) return 1
    let total = 1
    while(x) {
      console.log('x', x)
      console.log('total', total)
      total *= x
      x -= 1
    }
    return total
  }
  return fat
}
// console.log('7!', fat(7))

// n! = n (n − 1)!
// 6! = 6 * (6-1)!