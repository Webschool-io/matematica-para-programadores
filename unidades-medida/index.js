const unities = require('./unities.js')


const converter = (val, base, to) => unities[base][to](val)

// console.log('converter 0c => k', converter(0, 'c', 'k'))
// console.log('converter 20c => k', converter(20, 'c', 'k'))
// console.log('converter 100c => k', converter(100, 'c', 'k'))


// console.log('converter 0c => f', converter(0, 'c', 'f'))
// console.log('converter 20c => f', converter(20, 'c', 'f'))
// console.log('converter 100c => f', converter(100, 'c', 'f'))