"use strict";

app.config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        .state('home', {url: '/', title: 'Home', description: 'A Site Content', keywords: 'Some, Keywords, Go, Content', templateUrl: 'htmls/site/site.html', controller: 'HomeController' })
        .state('admins', {url: '/admins', title: 'Admins',templateUrl: 'htmls/admins/site/admins.html', controller: 'AdminWelcomController', controllerAs: "admin"})
        .state('login', {url: '/admins/login', title: 'Login', description: 'A Login', keywords: 'login, Keywords, Go, Here', templateUrl: 'htmls/admins/site/logowanie.html', controller: 'FormLogController', controllerAs: "form"})
        .state('addSite', {url: '/admins/addSite', title: 'addSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addSite.html', controller: 'AddSiteController', controllerAs: "add" })
        .state('listSite', {url: '/admins/listSite', title: 'listSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/listSite.html', controller: 'ListSiteController', controllerAs: "list" })
        .state('editSite', {url: '/admins/editSite/:id/:idparent', title: 'editSite', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/editSite.html', controller: 'EditSiteController' })
        .state('addGalery', {url: '/admins/addGalery/', title: 'addGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addGalery.html', controller: 'AddGaleryController' })
        .state('addCategoryGalery', {url: '/admins/addCategoryGalery', title: 'addCategoryGalery', description: 'A Nice Description', keywords: 'Some, Keywords, Go, Here', templateUrl: 'htmls/admins/site/addCategoryGalery.html', controller: 'AddCategoryGaleryController' });    
}
