"use strict";

app.directive('menuAdmin', menuAdmin);

function menuAdmin() {
    var directive = {
        replace: true,
        templateUrl: 'htmls/admins/directive/menuAdmin.html',
        restrict: 'AE'
    };
    return directive;   
}