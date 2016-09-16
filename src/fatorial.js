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
console.log('fat', fat(6))

// (n+1)!=n!*(n+1)