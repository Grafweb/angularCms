"use strict";

app.filter('filtersGalery', filtersGalery);

function filtersGalery() {
    return function(fotos, category)
            {
               var filtered = [];
               for (var i = 0; i < fotos.length; i++) {
                if(fotos[i]['category'] == category) filtered.push(fotos[i]);
               }
               return filtered;
            };    
}