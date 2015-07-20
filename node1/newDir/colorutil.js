
//===========================================================================//
                        /* ~~~ PART II - REQUIRE ~~~ */ 
//===========================================================================//

module.exports = { 

    luminosity : function(r, g, b) {

        var luminosity = ( (0.2126 * r) + (0.7152 * g) + (0.0722 * b) );

        return luminosity;
    }, 

    darken : function(r, g, b) {

        r = r - (r * 0.2);
        g = g - (g * 0.2);
        b = b - (b * 0.2);

        return r + " " + g + " " + b + ".";
    }

};