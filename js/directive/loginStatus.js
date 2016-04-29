"use strict";
app.directive('loginStatus', loginStatus);

function loginStatus() {
    var directive = {
        replace: true,
        link: link,
        templateUrl: 'htmls/admins/directive/loginStatus.html',
        restrict: 'AE',
    };
    return directive;

    function link(scope, element, attrs) {
      scope.logout = function(user){
        dataLoginService.logoutLogin();
    }
}

