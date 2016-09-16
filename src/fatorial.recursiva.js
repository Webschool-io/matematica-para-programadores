const fat = (x) => {
  if(!x) return 1
  // console.log('fat', x)
  return x*fat(x-1)
}
console.log('100!', fat(100))

// n! = n (n − 1)!
// 6! = 6 * (6-1)!