const somar = require('./atoms/atom_somar')


//Lembra da frase "a soma dos fatores não altera o produto",
// então caso o multiplicador seja maior eu irei trocar pelo operando,
// assim gerando um array menor para o calculo.

const multiplicadorMaior = (coeficiente, multiplicador) => coeficiente < multiplicador

const contemDecimal = (coeficiente, multiplicador) => parseInt(coeficiente) != parseFloat(coeficiente) 
                                                      || parseInt(multiplicador) != parseFloat(multiplicador);

const podeMultiplicar = (coeficiente, multiplicador) => contemDecimal(coeficiente, multiplicador)
                                                      ? comDecimal(coeficiente, multiplicador)
                                                      : semDecimal(coeficiente, multiplicador)

const removeDecimal = (num) => parseInt(String(num).replace('.', ''));

const casasDecimais = (num) => /\.(\w+)/.exec(num) !== null ? /\.(\w+)/.exec(num)[1] : null

const somaDecimais = (coeficiente, multiplicador) => {
  if(casasDecimais(coeficiente) == null)  { return parseInt(String(casasDecimais(multiplicador).length)) }
  else if(casasDecimais(multiplicador) == null) { return parseInt(String(casasDecimais(coeficiente).length)) }

  return somar(parseInt(String(casasDecimais(coeficiente).length)), parseInt(String(casasDecimais(multiplicador).length)));
}

const comDecimal = (coeficiente, multiplicador) => semDecimal(removeDecimal(coeficiente), removeDecimal(multiplicador), somaDecimais(coeficiente, multiplicador));

const semDecimal = (coeficiente, multiplicador, casasDecimais = 0) => multiplicadorMaior(coeficiente, multiplicador) 
                                                  ? recursive(multiplicador, coeficiente, [], 0, casasDecimais) 
                                                  : recursive(coeficiente, multiplicador, [], 0, casasDecimais)

const recursive = (coeficiente, multiplicador, arr = [], multiplicadorAtual = 0, casasDecimais) => {
  if(multiplicadorAtual >= multiplicador) {
    const result = somar(...arr);
    if(casasDecimais !== 0) return result/(10*casasDecimais)
    return result;
  }
  arr.push(coeficiente);
  multiplicadorAtual = somar(multiplicadorAtual, 1);
  return recursive(coeficiente, multiplicador, arr, multiplicadorAtual, casasDecimais);
}

const multiplicador = (coeficiente, multiplicador) => podeMultiplicar(coeficiente, multiplicador);

module.exports = multiplicador;