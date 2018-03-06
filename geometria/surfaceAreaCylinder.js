"use strict"

const
  pi       = Math.PI, 
  multiply = ( n, m ) => n * m,
  sum      = ( a, b ) => a + b,
  divide   = ( n, d ) => n / d,
  squared  = n => multiply( n, n ),
  doubled  = n => multiply( n, 2 );

const
  diamToRadius = diam => divide( diam, 2 ),
  toPerimeter  = diam => multiply( pi, diam ); 

const 
  areaCircle = radius => multiply( pi, squared( radius ) ),
  areaRect   = multiply;

const surfaceAreaCylinder = ( height, diameter ) => sum( 
  doubled( 
    areaCircle(
      diamToRadius( diameter ) 
    ))
  , areaRect( toPerimeter( diameter ), height )
);

const 
  height   = 10, 
  diameter = 20;

const totalArea = surfaceAreaCylinder( height, diameter );

console.log(totalArea)
