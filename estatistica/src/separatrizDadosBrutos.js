'use strict';

const conjunto = [ 2, 5, 6, 9, 10, 13, 15 ];

const medidaSeparatriz = (MEDIDA) => {
  switch (MEDIDA) {
    case 'Quartil':
      return 4;
    break;
    case 'Decil':
      return 10;
    break;
    case 'Percentil':
      return 100;
    break;
    default: return 0
  }
}

const calcularTamanhoConjunto = (conjunto) => {
  return conjunto.length;
};

const calcularSeparatriz = (MEDIDA, x, n) => {
  const medida = medidaSeparatriz(MEDIDA);
  return (x * n) / medida;
}

const retornarElemento = (conjunto, posicao) => {
  let pos = Math.ceil(posicao);
  // Precisamos subtrair em 1
  // pois a primeira posição é 0 e não 1
  let posicao_real = pos - 1;
  return conjunto[posicao_real];
};


const Q2 = calcularSeparatriz('Quartil', 2, calcularTamanhoConjunto(conjunto));
const Q2_elemento = retornarElemento(conjunto, Q2);
console.log('Q2: ', Q2);
console.log('Elemento de Q2: ', Q2_elemento);



// const proporcao = (N, valor) => {
//   return N / valor;
// };

// const primeiroValor = (primeiro, proporcao) => {
//   return primeiro * proporcao;
// };

// const subtrairFant = (primeiroValor, fant) => {
//   return primeiroValor - fant;
// }