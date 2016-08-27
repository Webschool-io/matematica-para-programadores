'use strict'

module.exports = (d1, d2) => {
  if(d1%2 === 0 && d2%2 ===0) return 2
  if(d1%d2 === 0) return d1/d2
    
  for(let i=d2; i>0; i--) {
    if(d1%i === 0 && d2%i===0) return i
    if(i===1) return i
  }
}