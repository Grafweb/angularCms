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

// app.controller('ContentSiteController',function($rootScope, $scope, $http, $log, $routeParams, $route, dataSite, siteService) {
    
//    $log.info("$routeParams.site" + $routeParams.site);
//     $log.info("$route.current.title" + $route.current.title);
    
    
//     $scope.dataSite = siteService.get({idSite: $routeParams.site, column:"link"});
    
//    // $scope.dataSite = {};
//    // $scope.dataSite.title = "darek";
//   //  $scope.dataSite.content = "description";
    
//     // $rootScope.title = "darek";
//     //     $rootScope.description = "darek";
//     //     $rootScope.keywords = "darek";


// console.info("contentSite use controler");

//     //siteService.getSite($routeParams.id, "id");
//     //$scope.dataSite = siteService.getSite($routeParams.id);
    
//    // $scope.dataSite = siteService.getSite($routeParams.id);
    
// });
