"use strict";

app.factory('listCategoryGaleryService', listCategoryGaleryService);

listCategoryGaleryService.$inject = ['$resource'];
function listCategoryGaleryService($resource) {
    return $resource('/data/addCategoryGalery.php');    
}
