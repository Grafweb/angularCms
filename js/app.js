"use strict";


var app = angular.module('cms', ['ngRoute','ngResource','ngSanitize']);


app.config(config);

function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {title: 'Home', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'HomeController' })
        .when('/:site', {title: 'Site', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'ContentSiteController' })
        .when('/admins/login', {title: 'Login',templateUrl: 'htmls/admins/site/logowanie.html', controller: 'FormLogController'})
        .when('/admins', {title: 'Admins',templateUrl: 'htmls/admins/site/admins.html', controller: 'AdminWelcomController'})
        .when('/admins/addSite', {title: 'addSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addSite.html', controller: 'AddSiteController' })
      .when('/admins/listSite', {title: 'listSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/listSite.html', controller: 'ListSiteController' })
      .when('/admins/editSite/:id/:idparent', {title: 'editSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/editSite.html', controller: 'EditSiteController' })
      .when('/admins/addGalery/', {title: 'addGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addGalery.html', controller: 'AddGaleryController' })
      .when('/admins/addCategoryGalery', {title: 'addCategoryGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addCategoryGalery.html', controller: 'AddCategoryGaleryController' })
      .otherwise({ redirectTo: '/'});    
}


app.run(runBlock);

runBlock.$inject = ['$rootScope', '$location', 'dataLoginService', '$route'];

function runBlock($rootScope, $location, dataLoginService, $route) {
    var permission = ['/admins'];
    var whereCurrent = $location.path();
    $rootScope.$on('$routeChangeStart',function(){

        if(whereCurrent.search(permission) != -1){    
           var check = dataLoginService.isLogin();
           check.then(function(msg){
               if(!msg.data.login) {
                   $rootScope.loginShow = false;
                   $rootScope.user = "";
                   $location.path('/admins/login');
               } else { 
                   $rootScope.loginShow = true;
                   $rootScope.user = msg.data.user || "";
               }
           });
            
            $rootScope.siteMenu = false;
            
        } else {
            $rootScope.siteMenu = true;
        }
        
    });
    
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.description = current.$$route.description;
        $rootScope.keywords = current.$$route.keywords;
         });
}


