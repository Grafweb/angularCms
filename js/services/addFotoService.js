"use strict";

app.factory('addFotosService',["$http", function($http){
    return {
            addFiles: function (plik) { 
                return $http({
                        url: 'data/addGalery.php',
                        method: 'POST',
                        headers: {'Content-Type': undefined },
                        transformRequest: angular.identity,
                        data: plik
                    });
                }
        };
}]);

