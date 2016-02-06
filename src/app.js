'use strict'

const somar = require('./atoms/atom_somar');
const subtrair = require('./atoms/atom_subtrair');

function multiplicar(x, y) {
  var total = 0;
  var contador = 0;
  while(x){
    total = somar(total, y)
    x -= 1;
  }
  return total;
}

console.log('9 x 3 = ', multiplicar(9,3));