var request = require('request');
var _ = require('underscore')

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body) {

    if (!error && response.statusCode === 200) {

        // set variables
        var webColors = JSON.parse(body);
        var colorName = process.argv[2];

        // find the color that matches the name we give pass and console log the element from the array that satisfies the truth test
        function findThatColor(cName) {

            // theColor variable will return an object -> we want to return the rgb sub-object of that specific object and return only the values
            var theColor = _.find(webColors, function(obj) {

                return obj.name.toLowerCase() === cName.toLowerCase() 
            });

            // we have the color object, now we need to go to the rgb property which is itself another object with key/values
            for (keys in theColor.rgb) {

                console.log(keys + ": " + theColor.rgb[keys]);
            }
        }

        findThatColor(colorName);
    }
})


