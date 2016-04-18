"use strict";

app.directive('menuSite', function(dataLogin) {
 return {
    restrict: 'AE',
    templateUrl: 'htmls/site/directive/menuSite.html',
    controller: [ "$scope","serviceSite", function ($scope, serviceSite) {
       $scope.listMenu = serviceSite.query();
            }],
    link: function (scope, element, attrs) {
        console.info("wyk directive menuAdmin");
        //console.dir(dataLogin.isLogin().data);
    }
  };

});


//http://stackoverflow.com/questions/16119398/how-can-i-update-meta-tags-in-angularjs