"use strict";

app.factory('listCategoryGaleryService',["$resource", function($resource){
    return $resource('/data/addCategoryGalery.php');
}]);