const somar = require('./atoms/atom_somar')

const multiplicadorMaior = (coeficiente, multiplicador) => coeficiente < multiplicador ? true : false;

//Lembra da frase "a soma dos fatores não alteram o produto", então caso o multiplicador seja maior eu irei trocar pera operando, assim gerando um array menor para o calculo.
const otimizador = (coeficiente, multiplicador) => multiplicadorMaior(coeficiente, multiplicador) ? recursive(multiplicador, coeficiente) : recursive(coeficiente, multiplicador)

const recursive = (coeficiente, multiplicador, arr = [], multiplicadorAtual = 0) => {
  if(multiplicadorAtual >= multiplicador) {
    return somar(...arr);
  }
  arr.push(coeficiente);
  multiplicadorAtual = somar(multiplicadorAtual, 1);
  return recursive(coeficiente, multiplicador, arr, multiplicadorAtual);
}

const multiplicador = (coeficiente, multiplicador) => otimizador(coeficiente, multiplicador);

module.exports = multiplicador;