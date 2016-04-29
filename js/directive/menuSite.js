"use strict";

app.directive('menuSite', menuSite);

function menuSite() {
    var directive = {
        replace: true,
        //link: link,
        templateUrl: 'htmls/site/directive/menuSite.html',
        restrict: 'AE',
        controller: MenuController
    };
    return directive;   
}

MenuController.$inject = ['$scope', 'siteService'];

function MenuController($scope, siteService) {
  $scope.listMenu = siteService.query();
}


//http://stackoverflow.com/questions/16119398/how-can-i-update-meta-tags-in-angularjs