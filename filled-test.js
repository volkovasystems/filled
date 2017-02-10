"use strict";

const filled = require( "./filled.js" );

console.log( filled( [ 1, 2, 3 ] ) );
console.log( filled( [ { } ] ) );
console.log( filled( [ ] ) );
console.log( filled( ) );
