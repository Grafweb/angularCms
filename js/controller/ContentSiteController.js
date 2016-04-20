"use strict";

app.controller('ContentSiteController', ContentSiteController);

ContentSiteController.$inject = ['siteService', '$routeParams'];
function AddCategoryGaleryController(siteService, $routeParams) {
    var vm = this;
    
     siteService.get(
        {idSite: $routeParams.site, column:"link"},
        function succes(data) {
           vm.dataSite = data; 
        },
        function error(err) {
            //add logs
        }
    );    
}
