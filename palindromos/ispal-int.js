const reverseInt  = ( n ) => _reverseInt( n, 0 );
const _reverseInt = ( n, a ) => !!n && _reverseInt( n/10 | 0, a*10 + n%10 ) || a;
const isPalInt = ( n ) => n == reverseInt( n );

isPalInt(11122111) // true
