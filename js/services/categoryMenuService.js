"use strict";

app.factory('categoryMenuService', categoryMenuService);

categoryMenuService.$inject = ['$resource'];
function categoryMenuService($resource) {
    return $resource('/data/categoryMenu.php');    
}
