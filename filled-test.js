
const assert = require( "assert" );
const filled = require( "./filled.js" );

assert.equal( filled( [ 1, 2, 3 ] ), true, "should be true" );
assert.equal( filled( [ { } ] ), true, "should be true" );
assert.equal( filled( [ ] ), false, "should be false" );

console.log( "ok" );
