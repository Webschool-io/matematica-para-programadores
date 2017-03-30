const isEqualLength = ( num ) => num.length % 2
const getLength = ( num ) => num.length
const sliceInMiddle = ( num, half, full ) => num.slice( half, full )
const transformToString = ( num ) => num.toString()
const reverseString = ( str ) => str.split('').reverse().join('')

const getFirstHalf = ( num ) => {
  const full = getLength( transformToString( num ) )
  const half = ( full / 2 )
  return transformToString( num ).slice( 0, half )
}

const getOtherHalf = ( num ) => {
  const full = getLength( transformToString( num ) )
  const half = ( full / 2 )
  return reverseString( sliceInMiddle( transformToString( num ), 
                                        half, 
                                        full ) ) 
}

const isPalindrome = ( num ) => getFirstHalf( num ) === getOtherHalf( num )

console.log(`isPalindrome`, isPalindrome(5005))
