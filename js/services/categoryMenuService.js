"use strict";

app.factory('categoryMenuService',["$resource", function($resource){
    return $resource('/data/categoryMenu.php');
}]);