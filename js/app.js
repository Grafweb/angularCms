"use strict";

/*https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md*/
/*Angular graph*/

var app = angular.module('galery', ['ngRoute','ngResource','ngSanitize']);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
$locationProvider.html5Mode(true);
        $routeProvider.when('/', {title: 'Home', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'HomeController' })
        .when('/:site', {title: 'Site', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'ContentSiteController' })
        .when('/admins/login', {title: 'Login',templateUrl: 'htmls/admins/site/logowanie.html', controller: 'FormLogController'})
        .when('/admins', {title: 'Admins',templateUrl: 'htmls/admins/site/admins.html', controller: 'AdminWelcomController' /*, 
        resolve: {
               checkLogin : function(dataLogin){
                   var check = dataLogin.isLogin();
                    //return check; 
                   check.then(function(msg){
                   $log.info('msg ' + msg.data.ses);
                   //if(!msg.data) $location.path('/');
               });
               }     
        }*/
    }).when('/admins/addSite', {title: 'addSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addSite.html', controller: 'AddSiteController' })
      .when('/admins/listSite', {title: 'listSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/listSite.html', controller: 'ListSiteController' })
      .when('/admins/editSite/:id/:idparent', {title: 'editSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/editSite.html', controller: 'EditSiteController' })
      .when('/admins/addGalery/', {title: 'addGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addGalery.html', controller: 'AddGaleryController' })
      .when('/admins/addCategoryGalery', {title: 'addCategoryGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addCategoryGalery.html', controller: 'AddCategoryGaleryController' })
      .otherwise({ redirectTo: '/'});
      
    //   console.info("console.dir($routeParams);" + $routeProvider );
    //   console.dir($routeProvider);

}]);

//http://blog.kamilbrenk.pl/javascript-sterowany-obietnicami/
//http://odetocode.com/blogs/scott/archive/2014/05/20/using-resolve-in-angularjs-routes.aspx

app.run(function($rootScope, $location, $log, dataLogin, $route){
    var permission = ['/admins'];
    var whereCurrent = $location.path();
    $rootScope.$on('$routeChangeStart',function(){
        //console.info("ssss");
        if(whereCurrent.search(permission) != -1){    
           var check = dataLogin.isLogin();
           check.then(function(msg){
               //$log.info('msg ' + msg);
               if(!msg.data.login) {
                   $rootScope.loginShow = false;
                   $rootScope.user = "";
                   $location.path('/admins/login');
                   console.info('!msg.data.login');
               } else { 
                   $rootScope.loginShow = true;
                   $rootScope.user = msg.data.user || "";
                   console.info('msg.data.login');
                   //$location.path('/admins'); 
               }
           });
            
            $rootScope.siteMenu = false;
            
        } else {
            $rootScope.siteMenu = true;
        }
        
        // $log.info("$location " + $location.path() + "dataLogin.isLogin() " + dataLogin.isLogin() + "whereCurrent.search(permission) != -1" 
        //   + (whereCurrent.search(permission) != -1));
    });
    
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.description = current.$$route.description;
        $rootScope.keywords = current.$$route.keywords;
         });
    
    $log.info("$route.routes" + $route.routes);
    //$log.dir(current.$$route);
    
});
