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

// console.log('9 x 3 = ', multiplicar(9,3));

const dividir = function () {
  var valores = Array.apply(null, arguments);
  var total = valores[0];
  console.log('valores', valores)
  console.log('total', total)
  valores.splice(0,1);
  valores.forEach(function(elem){ 
    console.log('elem', elem)
    total = total / elem;
    console.log('total', total)
  });
  return total;
};
console.log('9 / 3 = ', dividir(9,3,3));