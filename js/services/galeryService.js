"use strict";

app.factory('galeryService', galeryService);

galeryService.$inject = ['$http'];
function galeryService($http) {
    return $http({
             url: 'data/addGalery.php',
             method: 'POST',
            headers: {'Content-Type': undefined },
            transformRequest: angular.identity
        });    
}