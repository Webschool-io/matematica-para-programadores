
module.exports = (x) => {
  
  const fat = (x) => {
    if(!x) return 1
    // console.log('fat', x)
    return x*fat(x-1)
  }
}
// console.log('7!', fat(7))

// n! = n (n − 1)!
// 6! = 6 * (6-1)!