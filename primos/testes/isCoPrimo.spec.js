
const describes = [
  { type: true
  , message: 'é COPRIMO'
  , values: [20, 21]
  , valueType: 'array'
  }
, 
  { type: false
  , message: 'não é COPRIMO'
  , values: [10, 20, 21]
  , valueType: 'array'
  }
];
require('./testModule')('isCoPrimo', describes);