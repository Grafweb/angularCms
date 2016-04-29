"use strict";

app.factory('siteService', siteService);

siteService.$inject = ['$resource'];
function siteService($resource) {
    return $resource('/data/restSite.php/:idSite/:column',
                {idSite: -1, column: -1},
                {update: {method: "PUT"}});    
}