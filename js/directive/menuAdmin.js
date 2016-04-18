"use strict";

app.directive('menuAdmin', function(dataLogin) {
 return {
    restrict: 'AE',
    templateUrl: 'htmls/admins/directive/menuAdmin.html',
    link: function (scope, element, attrs) {
        console.info("wyk directive menuAdmin");
        //console.dir(dataLogin.isLogin().data);
    }
  };

});


//http://stackoverflow.com/questions/16119398/how-can-i-update-meta-tags-in-angularjs