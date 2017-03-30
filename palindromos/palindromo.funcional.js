const isEqualLength = ( num ) => num.length % 2

const transformToString = ( num ) => num.toString()

const transformStringToArray = ( num ) => num.split('')

const getLength = ( num ) => num.length

const getFirstHalf = ( num ) => {
  const full = getLength( transformToString( num )
  const half = ( full / 2 ) - 1
  return transformToString( num ).slice( 0, half )
}

// const testForEqual = ( num ) => transformToString( num ).split('').slice( 0, )

const breakInTheMiddle = ( num ) => getFirstHalf( num )
  // ( isEqualLength( num ) )
  //   ? testForEqual
  //   ? testForNotEqual

console.log(`breakInTheMiddle`, breakInTheMiddle(num))
