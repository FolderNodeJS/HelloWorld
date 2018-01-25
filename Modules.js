var foo = require('foo');
var Bar = require('bar');
var justOne = require('largeModule').justOne;

var data = require('./data');       // data.js in the same directory
var foo2 = require('./other/foo');  // foo2.js in the 'other' subdirectory
var bar2 = require('../lib/bar');   // bar.js in the 'lib' directory, "up and over" from this script's directory

var f = 2 + foo.alpha;      // modules can export variables
var b = foo.beta() * 3;     // ... including functions

var bar = new Bar();        // modules may export objects

console.log(justOne());

//--------------------------------------

var count = 2;
module.exports.countVar = count;        // in file where will be require this file will be visible 'countVar'

