"use strict";

app.controller('FormLogController',function($scope, $http, $location, $httpParamSerializerJQLike, dataLogin, dataSession) {
   
    
    $scope.sendform = function(user){
    //    console.dir($scope.datauser);
        
      var logs = dataLogin.login(user);
        
        logs.then(function(msg){
            console.info("msg.data.ses " + msg.data.ses);
            if(msg.data.ses) {
                $scope.loginShow = true;
                console.info("msg" + msg.data.ses);
            dataSession.set('uzytkownik', msg.data.login);
            $location.path('/admins');
            } else {
            $location.path('/admins/login');    
            }
            
            
        });
       
    };
    
});
    