const sum = (x) => {
  console.log('x', x)
  if (x < 1) return x
  return x + sum(x-1)
}

console.log(sum(5))