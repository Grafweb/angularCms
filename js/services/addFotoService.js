"use strict";

app.factory('addFotosService', addFotosService);

addFotosService.$inject = ['$http'];
function addFotosService($http) {
    var service = {
        addFiles : addFiles
    }
    
    return service;    


    function addFiles(plik) {
        return $http({
                    url: 'data/addGalery.php',
                    method: 'POST',
                    headers: {'Content-Type': undefined },
                    transformRequest: angular.identity,
                    data: plik
                    });
    }
}