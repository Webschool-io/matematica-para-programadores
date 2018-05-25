const reverse = ( [ x, ...xs ] ) => ( x !== void 0 ) && [ ...reverse( xs ), x ]; 
const equals = ( [ x, ...xs ], [ y, ...ys ] ) => !!( x === void 0 ) || x === y && equals( xs, ys );
const mirrorV = ( xs, ys ) => equals( xs, reverse( ys ) );
