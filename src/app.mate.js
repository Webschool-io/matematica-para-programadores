'use strict'

const somar = require('./atom_somar');
const subtrair = require('./atom_subtrair');

function multiplicar(x, y) {
  var total = 0;
  var contador = 0;
  while(x){
    total = somar(total, y)
    x -= 1;
  }
  return total;
}

console.log('vezes: ', multiplicar(9,3));