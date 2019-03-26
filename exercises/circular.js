'use strict'

/*
 * Create an object named `circular` that has a property named `circular` with
 * itself as the value
 *
 * @notions Data-Structures, Get, Set
 */

// Your code :

var circular = new Object();
circular.circular=circular

/*var objet1 = new Object ;

objet1.chaine="Bonjour!" ;
objet1.affiche=function(){
  alert(this.chaine) ;
}

objet1.affiche() ;
*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof circular, 'object')
assert.strictEqual(circular.circular, circular)
assert.strictEqual(circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular, circular)
assert.strictEqual(circular.circular.circular.circular.circular, circular)
// End of tests */
