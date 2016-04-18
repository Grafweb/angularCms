"use strict";

app.factory('siteService',["$resource", function($resource){

    return $resource('/data/restSite.php/:idSite/:column',
                {idSite: -1, column: -1},
                {update: {method: "PUT"}});
}]);