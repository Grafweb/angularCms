"use strict";

app.factory('listFotoGaleryService',["$resource", function($resource) {
    return $resource('/data/listFoto.php',null,null);
}]);    