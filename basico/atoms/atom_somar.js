//Agora lida com multi parametros de forma mais simples
//Funcional <3
//const reduce = (array) => array.reduce((total, element) => total += element, 0)
//const soma = (...args) => reduce(args);
const soma = (...args) => args.reduce((total, element) => total += element, 0)

module.exports = soma;
