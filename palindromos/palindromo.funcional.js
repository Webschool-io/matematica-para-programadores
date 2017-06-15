
const toTransformInString = ( num ) => num.toString()

const isEqualLength = ( num ) => 
  !( toTransformInString( num ).length % 2 )

const getLength = ( num ) => num.length

const toSliceInMiddle = ( num, half, full ) => 
  num.slice( half, full )

const reverseString = ( str ) => str.split('').reverse().join('')

const getFirstHalf = ( num ) => {
  const full = getLength( toTransformInString( num ) )
  return parseInt(toTransformInString( num ).slice( 0, full / 2 ))
}

const getOtherHalf = ( num ) => {
  const full = getLength( toTransformInString( num ) )
  const half = ( isEqualLength( num ) )
                  ? parseInt(full / 2 )
                  : parseInt(full / 2 ) + 1

  return parseInt( reverseString( 
                    toSliceInMiddle(  toTransformInString( num ), 
                                      half, 
                                      full ) ) )
}

const isPalindrome = ( num ) => getFirstHalf( num ) === getOtherHalf( num )

module.exports = isPalindrome

console.log(`is Palindrome 5005? `, isPalindrome(5005))
console.log(`is Palindrome 50105? `, isPalindrome(50105))
