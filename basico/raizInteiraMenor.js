
// 0 -10= 2,3
// 10-20 = 3,4
// 20-30 = 4,5
// 30-40 = 5,6
// 40-50 = 6,7
// 50-60 = 6,7
// 60-70 = 7,8
// 70-80 = 7,8
// 80-90 = 8,9
// 90-100 = 9,10

const aoQuadrado = ( x ) => x * x

const usandoDivisores = ( tamanho, i ) => ( el, index ) => 
  Math.floor( tamanho / 10 ) + i + index 

const crieArray = ( tamanho, i ) => 
  Array.from( { length: 2 }, 
    usandoDivisores( tamanho, i ) )

crieArraySuperior = ( tamanho ) => 
  ( tamanho >= 80 ) 
    ? crieArray( tamanho, 0 )
    : crieArray( tamanho, 1 )

const crieArrayCom = tamanho => 
  ( tamanho >= 60 )
    ? crieArraySuperior( tamanho )
    : crieArray( tamanho, 2 ) 

const teste = ( x ) => ( acc, numero ) => 
  ( numero * numero <= x)
    ? numero
    : acc

console.log('\n')
console.log('17', crieArrayCom(17).reduce(teste(17), 0))
console.log('16', crieArrayCom(16).reduce(teste(16), 0))
console.log('15', crieArrayCom(15).reduce(teste(15), 0))
 
console.log('\n')
console.log('27', crieArrayCom(27).reduce(teste(27), 0))
console.log('25', crieArrayCom(25).reduce(teste(25), 0))
console.log('21', crieArrayCom(21).reduce(teste(21), 0))
 
console.log('\n')
console.log('37', crieArrayCom(37).reduce(teste(37), 0))
console.log('36', crieArrayCom(36).reduce(teste(36), 0))
console.log('31', crieArrayCom(31).reduce(teste(31), 0))

console.log('\n')
console.log('49', crieArrayCom(49).reduce(teste(49), 0))
console.log('45', crieArrayCom(45).reduce(teste(45), 0))
console.log('42', crieArrayCom(42).reduce(teste(42), 0))
console.log('41', crieArrayCom(41).reduce(teste(41), 0))
console.log('40', crieArrayCom(40).reduce(teste(40), 0))

console.log('\n')
console.log('59', crieArrayCom(59).reduce(teste(59), 0))
console.log('55', crieArrayCom(55).reduce(teste(55), 0))
console.log('52', crieArrayCom(52).reduce(teste(52), 0))
console.log('51', crieArrayCom(51).reduce(teste(51), 0))
console.log('50', crieArrayCom(50).reduce(teste(50), 0))

console.log('\n')
console.log('69', crieArrayCom(69).reduce(teste(69), 0))
console.log('65', crieArrayCom(65).reduce(teste(65), 0))
console.log('64', crieArrayCom(64).reduce(teste(64), 0))
console.log('61', crieArrayCom(61).reduce(teste(61), 0))
console.log('60', crieArrayCom(60).reduce(teste(60), 0))

console.log('\n')
console.log('79', crieArrayCom(79).reduce(teste(79), 0))
console.log('75', crieArrayCom(75).reduce(teste(75), 0))
console.log('72', crieArrayCom(72).reduce(teste(72), 0))
console.log('71', crieArrayCom(71).reduce(teste(71), 0))
console.log('70', crieArrayCom(70).reduce(teste(70), 0))


console.log('\n')
console.log('89', crieArrayCom(89).reduce(teste(89), 0))
console.log('85', crieArrayCom(85).reduce(teste(85), 0))
console.log('82', crieArrayCom(82).reduce(teste(82), 0))
console.log('81', crieArrayCom(81).reduce(teste(81), 0))
console.log('80', crieArrayCom(80).reduce(teste(80), 0)) 

console.log('\n')
console.log('99', crieArrayCom(99).reduce(teste(99), 0))
console.log('95', crieArrayCom(95).reduce(teste(95), 0))
console.log('92', crieArrayCom(92).reduce(teste(92), 0))
console.log('91', crieArrayCom(91).reduce(teste(91), 0))
console.log('90', crieArrayCom(90).reduce(teste(90), 0))

console.log('\n')
console.log('109', crieArrayCom(109).reduce(teste(109), 0))
console.log('101', crieArrayCom(101).reduce(teste(101), 0))
console.log('100', crieArrayCom(100).reduce(teste(100), 0))

console.log('\n')
console.log('129', crieArrayCom(129).reduce(teste(129), 0))
console.log('121', crieArrayCom(121).reduce(teste(121), 0))
console.log('100', crieArrayCom(100).reduce(teste(100), 0))
