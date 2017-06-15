
module.exports = () => {

  const fat = (x) => {
    if(!x) return 1
    let total = x
    while(x > 1) {
      total = total * (x - 1)
      x = x - 1
    }
    return total
  }
  return fat
}
// console.log('7!', fat(7))

// n! = n (n − 1)!
// 6! = 6 * (6-1)!