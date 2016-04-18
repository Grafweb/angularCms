"use strict";

app.factory('galeryService',["$http", function($http){

    return $http({
             url: 'data/addGalery.php',
             method: 'POST',
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        });
}]);