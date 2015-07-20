
//===========================================================================//
                        /* ~~~ bonus 1 ~~~ */ 
//===========================================================================//

var module = require('./colorutil.js')

var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];


console.log(module.darken(red, green, blue)); 

//> VICTORY