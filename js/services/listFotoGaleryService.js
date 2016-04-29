"use strict";

app.factory('listFotoGaleryService', listFotoGaleryService);

listFotoGaleryService.$inject = ['$resource'];
function listFotoGaleryService($resource) {
    return $resource('/data/listFoto.php',null,null);    
}
