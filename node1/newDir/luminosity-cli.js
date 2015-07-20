
//===========================================================================//
                        /* ~~~ require() - practice ~~~ */ 
//===========================================================================//

// require the output of the colorutil.js
    //> in this case it's an object with a method on it
var lumin = require('./colorutil.js');

var red = process.argv[2];
var green = process.argv[3];
var blue = process.argv[4];


console.log(lumin.luminosity(red, green, blue ));

//> VICTORY