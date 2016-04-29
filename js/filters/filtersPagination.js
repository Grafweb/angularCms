"use strict";

app.filter('pagination', pagination);

function pagination() {
    return function(input, start)
            {
               return input.slice(start);
            };    
}