const valor = 100 // R$
const juros = 10 // %
const parcelas = 2

const aPagar=(valor, juros, parcelas)=>(!parcelas)?valor:aPagar(valor += valor*(juros/100 ),juros,--parcelas)


console.log('aPagar', aPagar(valor, juros, parcelas))