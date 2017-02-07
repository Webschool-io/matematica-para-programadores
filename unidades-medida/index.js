const unities = require('./unities.js')


const converter = (val, base, to) => unities[base][to](val)

// console.log('converter 0c => k', converter(0, 'c', 'k'))
// console.log('converter 20c => k', converter(20, 'c', 'k'))
// console.log('converter 100c => k', converter(100, 'c', 'k'))


// console.log('converter 0c => f', converter(0, 'c', 'f'))
// console.log('converter 20c => f', converter(20, 'c', 'f'))
// console.log('converter 100c => f', converter(100, 'c', 'f'))


// console.log('converter 1cal => J', converter(1, 'cal', 'J'))
// console.log('converter 10cal => J', converter(10, 'cal', 'J'))


// console.log('converter 1torr => atm', converter(1, 'torr', 'atm'))
// console.log('converter 1atm => torr', converter(1, 'atm', 'torr'))


console.log('converter 1km/h => m/min', converter(1, 'km/h', 'm/min'))
console.log('converter 1km/h => m/s', converter(1, 'km/h', 'm/s'))
console.log('converter 1km/h => cm/min', converter(1, 'km/h', 'cm/min'))
console.log('converter 1km/h => cm/s', converter(1, 'km/h', 'cm/s'))