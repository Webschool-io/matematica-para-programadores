'use strict';

const proporcao = (N, valor) => {
  return N / valor;
};

const primeiroValor = (primeiro, proporcao) => {
  return primeiro * proporcao;
};

const subtrairFant = (primeiroValor, fant) => {
  return primeiroValor - fant;
}

const conjunto = [ 2, 5, 6, 9, 10, 13, 15 ];

const calcularTamanhoConjunto = (conjunto) => {
  return conjunto.length;
};