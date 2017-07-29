
const assert = require( "assert" );
const filled = require( "./filled.js" );

assert.equal( filled( [ 1, 2, 3 ] ), true, "should return true" );

assert.equal( filled( [ { } ] ), true, "should return true" );

assert.equal( filled( [ ] ), false, "should return false" );

console.log( "ok" );
