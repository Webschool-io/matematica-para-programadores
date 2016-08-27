'use strict'

module.exports == (d1, d2) => {
  for(let i=1; i<=d2; i++) {
    let tabuada = d1*i
    if(tabuada%d2 === 0) return tabuada
  }
}