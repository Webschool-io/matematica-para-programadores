const inverterSinal = ( n ) => -1 * n
const raizQuadradaDe = ( n ) => Math.sqrt( n )
const elevarAoQuadrado = ( n ) => n * n

const delta = ( a, b, c ) => 
  elevarAoQuadrado( b ) - ( 4 * a * c )

const raizDe = ( delta ) => 
  ( delta >= 0 )
    ? raizQuadradaDe( delta )
    : false

const retornaRaizes = ( a, b, c ) => 
  [ ( inverterSinal( b ) + raizDe( delta( a, b, c ) ) ) / 2 * a,
    ( inverterSinal( b ) - raizDe( delta( a, b, c ) ) ) / 2 * a, ]

const calcularBhaskara = ( a, b, c ) => 
  ( delta( a, b, c ) >= 0 )
      ? retornaRaizes( a, b, c )
      : false

const resultado = calcularBhaskara( -1, 1, 4 )

console.log('resultado', resultado)