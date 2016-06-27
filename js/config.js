"use strict";

app.config(config);

function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {title: 'Home', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'HomeController' })
        .when('/:site', {title: 'Site', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'ContentSiteController' })
        .when('/admins/login', {title: 'Login',templateUrl: 'htmls/admins/site/logowanie.html', controller: 'FormLogController', controllerAs: "form"})
        .when('/admins', {title: 'Admins',templateUrl: 'htmls/admins/site/admins.html', controller: 'AdminWelcomController', controllerAs: "admin"})
        .when('/admins/addSite', {title: 'addSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addSite.html', controller: 'AddSiteController', controllerAs: "add" })
      .when('/admins/listSite', {title: 'listSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/listSite.html', controller: 'ListSiteController', controllerAs: "list" })
      .when('/admins/editSite/:id/:idparent', {title: 'editSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/editSite.html', controller: 'EditSiteController' })
      .when('/admins/addGalery/', {title: 'addGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addGalery.html', controller: 'AddGaleryController' })
      .when('/admins/addCategoryGalery', {title: 'addCategoryGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addCategoryGalery.html', controller: 'AddCategoryGaleryController' })
      .otherwise({ redirectTo: '/'});    
}