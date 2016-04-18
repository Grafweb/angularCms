"use strict";

app.filter('pagination', function()
{
 return function(input, start)
    {
        console.info("start" + start);
       // start = +start;
        console.info("start" + start);
        return input.slice(start);
    };
});