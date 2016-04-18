"use strict";

app.directive('loginStatus', function(dataLogin) {
 return {
    restrict: 'AE',
    replace: true,
    templateUrl: 'htmls/admins/directive/loginStatus.html',
    
    //templateUrl: 'htmls/admins/directive/menuAdmin.html',
    link: function (scope, element, attrs) {
        console.info("wyk login status");
        
        scope.logout = function(user){
    //    console.dir($scope.datauser);
        console.info("wykonałem logout");
        dataLogin.logoutLogin();
        
       
    };
        
    }
  };

});

