"use strict";

app.controller('HomeController',function($rootScope, $scope, $http, $log, $routeParams, $route, dataSite, siteService) {
    
   $log.info("$routeParams.site" + $routeParams.site);
    $log.info("$route.current.title" + $route.current.title);
    
    
    $scope.dataSite = siteService.get({idSite: 0, column:"category"});
    
   // $scope.dataSite = {};
   // $scope.dataSite.title = "darek";
  //  $scope.dataSite.content = "description";
    

console.info("welcom to home page");

    //siteService.getSite($routeParams.id, "id");
    //$scope.dataSite = siteService.getSite($routeParams.id);
    
   // $scope.dataSite = siteService.getSite($routeParams.id);
    
});
    